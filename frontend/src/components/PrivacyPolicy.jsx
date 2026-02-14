import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from './ui/button';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/">
            <Button variant="outline" className="border-[#13295f] text-[#13295f]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Site
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#13295f] mb-8">
          Política de Privacidade
        </h1>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-[#13295f] mb-4">1. Informações Coletadas</h2>
            <p className="leading-relaxed">
              A VPA Tech coleta apenas as informações necessárias para prestar nossos serviços, 
              incluindo nome, e-mail, telefone e informações da empresa fornecidas através dos 
              formulários de contato do nosso site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#13295f] mb-4">2. Uso das Informações</h2>
            <p className="leading-relaxed mb-3">
              As informações coletadas são utilizadas exclusivamente para:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Responder solicitações de contato e orçamentos</li>
              <li>Prestar serviços contratados</li>
              <li>Enviar informações relevantes sobre nossos serviços</li>
              <li>Melhorar a experiência do usuário no site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#13295f] mb-4">3. Proteção de Dados (LGPD)</h2>
            <p className="leading-relaxed">
              A VPA Tech está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018). 
              Seus dados pessoais são armazenados de forma segura e nunca serão compartilhados com terceiros 
              sem sua expressa autorização, exceto quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#13295f] mb-4">4. Cookies</h2>
            <p className="leading-relaxed">
              Nosso site pode utilizar cookies para melhorar a experiência de navegação. 
              Você pode configurar seu navegador para recusar cookies, mas isso pode afetar 
              algumas funcionalidades do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#13295f] mb-4">5. Seus Direitos</h2>
            <p className="leading-relaxed mb-3">
              De acordo com a LGPD, você tem direito a:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar o consentimento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#13295f] mb-4">6. Contato</h2>
            <p className="leading-relaxed">
              Para exercer seus direitos ou tirar dúvidas sobre nossa política de privacidade, 
              entre em contato através do e-mail: <strong>contato@vpatech.com.br</strong> ou 
              telefone: <strong>(11) 95268-4250</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#13295f] mb-4">7. Alterações na Política</h2>
            <p className="leading-relaxed">
              Esta política de privacidade pode ser atualizada periodicamente. 
              Recomendamos que você revise esta página regularmente para se manter informado.
            </p>
          </section>

          <div className="pt-6 border-t border-gray-200 text-sm text-gray-500">
            <p>Última atualização: Dezembro de 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};
