import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, EmailStr
from fastapi.middleware.cors import CORSMiddleware

# Configurações do servidor SMTP interno
SMTP_SERVER = "mail" # Substitua pelo endereço do servidor SMTP
SMTP_PORT = 25       # Geralmente, servidores internos usam a porta 25

# Instância FastAPI
app = FastAPI()

# Configuração de CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo para dados de e-mail
class EmailData(BaseModel):
    recipient: EmailStr  # E-mail do destinatário
    subject: str         # Assunto do e-mail
    body: str            # Conteúdo do e-mail

# Endpoint para envio de e-mails
@app.post("/send-email")
async def send_email(data: EmailData):
    try:
        # Criação da mensagem
        message = MIMEMultipart()
        message["From"] = data.recipient
        message["To"] = "elcio.mateus@tuper.com.br"
        message["Subject"] = data.subject
        message.attach(MIMEText(data.body, "plain"))

        # Envio do e-mail
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.sendmail(data.recipient, "elcio.mateus@tuper.com.br", message.as_string())

        return {"message": "E-mail enviado com sucesso!"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erro ao enviar e-mail: {str(e)}")
