# VPA Tech — Site institucional

Este repositório contém o site institucional da **VPA Tech** (React + Tailwind), pronto para publicar **gratuitamente no GitHub Pages** via GitHub Actions.

## Publicação no GitHub Pages (grátis)

1. No GitHub, vá em **Settings → Pages**
2. Em **Build and deployment**, selecione **Source: GitHub Actions**
3. Faça push para a branch **main**
4. O workflow `.github/workflows/pages.yml` irá:
   - instalar dependências do `frontend/`
   - gerar o build
   - publicar automaticamente no GitHub Pages

## Configurar o formulário (envio por e-mail sem backend)

O formulário de contato usa **Formspree** (sem backend).

### Passo a passo
1. Crie uma conta e um formulário no Formspree
2. Copie o endpoint gerado (ex: `https://formspree.io/f/abcdwxyz`)
3. Configure o endpoint no build do site:

#### Opção A — editar direto no código (mais simples)
No arquivo:
`frontend/src/components/Contact.jsx`

Troque:
`https://formspree.io/f/SEU_ID`
pelo seu endpoint real.

#### Opção B — variável de ambiente (recomendado)
Defina a variável:
`REACT_APP_FORMSPREE_ENDPOINT`

Exemplo local (Windows PowerShell):
```powershell
$env:REACT_APP_FORMSPREE_ENDPOINT="https://formspree.io/f/abcdwxyz"
npm --prefix frontend run build
```

> Observação: no GitHub Pages, variáveis precisam ser definidas no workflow (ou você pode manter a URL fixa no código).

## Desenvolvimento local

```bash
cd frontend
npm install
npm start
```
