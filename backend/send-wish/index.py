import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def handler(event: dict, context) -> dict:
    """Отправляет пожелание выпускнице на email matiuhinata@gmail.com"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')
    name = body.get('name', '').strip()
    wish = body.get('wish', '').strip()

    if not wish:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': {'error': 'Пожелание не может быть пустым'}
        }

    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    from_email = 'matiuhinata@gmail.com'
    to_email = 'matiuhinata@gmail.com'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'🎓 Пожелание на выпускной от: {name or "Аноним"}'
    msg['From'] = from_email
    msg['To'] = to_email

    author = name if name else 'Аноним'
    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0014; color: #fff; padding: 32px; border-radius: 12px;">
        <h1 style="color: #c084fc; font-size: 24px; margin-bottom: 8px;">🎓 Новое пожелание!</h1>
        <p style="color: #a78bfa; margin-bottom: 24px; font-size: 14px;">Пришло с сайта «С Выпускным 2026» — МБОУ СОШ №5, г. Завитинск</p>
        <div style="background: rgba(168,85,247,0.1); border: 1px solid rgba(168,85,247,0.3); border-radius: 8px; padding: 20px; margin-bottom: 16px;">
            <p style="color: #e9d5ff; font-size: 16px; line-height: 1.6; margin: 0;">{wish}</p>
        </div>
        <p style="color: #9ca3af; font-size: 14px; margin: 0;">— {author}</p>
    </div>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(from_email, smtp_password)
        server.sendmail(from_email, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': {'ok': True, 'message': 'Пожелание отправлено!'}
    }