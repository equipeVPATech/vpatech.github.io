import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { companyInfo } from '../data/mock';
import { toast } from 'sonner';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgevyel';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          phone: formData.phone,
          message: formData.message,
          // Ajuda a identificar a origem
          source: 'vpatech.com.br'
        })
      });

      if (!res.ok) {
        // Formspree costuma retornar JSON com error/message
        let detail = '';
        try {
          const data = await res.json();
          detail = data?.error || data?.message || '';
        } catch {}
        throw new Error(detail || 'Falha ao enviar. Tente novamente.');
      }

      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ name: '', company: '', phone: '', message: '' });
    } catch (err) {
      toast.error(err?.message || 'Não foi possível enviar sua mensagem agora. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Meu nome é ${formData.name || '[Nome]'}${formData.company ? ` da empresa ${formData.company}` : ''}. ${formData.message || 'Gostaria de conhecer mais sobre os serviços da VPA Tech.'}`
    );
    window.open(`https://wa.me/5511952684250?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-[#94c8ff]/20 text-[#13295f] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Entre em contato
          </div>
          <h2 className="text-4xl font-bold text-[#13295f] mb-6">
            Vamos Conversar Sobre Seu Projeto?
          </h2>
          <p className="text-lg text-gray-600">
            Atendemos empresas em Jundiaí e região, com projetos digitais para todo o Brasil. Preencha o formulário ou fale diretamente pelo WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#13295f] mb-6">
              Fale Conosco
            </h3>
            
            <div className="space-y-6 mb-8">
              {/* Phone */}
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#94c8ff]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#13295f]" />
                </div>
                <div>
                  <p className="font-semibold text-[#13295f] mb-1">Telefone / WhatsApp</p>
                  <a href="tel:+5511952684250" className="text-gray-600 hover:text-[#13295f] transition-colors">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#94c8ff]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#13295f]" />
                </div>
                <div>
                  <p className="font-semibold text-[#13295f] mb-1">E-mail</p>
                  <a href={`mailto:${companyInfo.email}`} className="text-gray-600 hover:text-[#13295f] transition-colors">
                    {companyInfo.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#94c8ff]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#13295f]" />
                </div>
                <div>
                  <p className="font-semibold text-[#13295f] mb-1">Endereço</p>
                  <p className="text-gray-600 text-sm">
                    {companyInfo.address.street}<br />
                    {companyInfo.address.neighborhood}, {companyInfo.address.city} - {companyInfo.address.state}<br />
                    CEP: {companyInfo.address.zip}
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-[#94c8ff]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#13295f]" />
                </div>
                <div>
                  <p className="font-semibold text-[#13295f] mb-1">Horário de Atendimento</p>
                  <p className="text-gray-600 text-sm">{companyInfo.businessHours}</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-64">
              <iframe
                src={companyInfo.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VPA Tech Localização"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-[#13295f] mb-6">
              Envie uma Mensagem
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Empresa
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nome da sua empresa"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp / Telefone *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(11) 98765-4321"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-nos sobre seu projeto ou necessidade..."
                  rows={5}
                  className="w-full"
                />
              </div>

              <div className="space-y-3">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#13295f] hover:bg-[#13295f]/90 text-white font-semibold py-6"
                >
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="w-full border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-semibold py-6"
                >
                  Ou envie via WhatsApp
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
