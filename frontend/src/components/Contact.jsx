import React, { useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import { toast } from 'sonner';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgevyel';
const needs = ['Criar um site', 'Melhorar meu site', 'Google & SEO', 'Manutenção', 'Outro'];

export const Contact = () => {
  const [formData, setFormData] = useState({ name:'', company:'', phone:'', need:'Criar um site', message:'' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const update = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault(); setIsSubmitting(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT,{method:'POST',headers:{Accept:'application/json','Content-Type':'application/json'},body:JSON.stringify({...formData,source:'vpatech.com.br'})});
      if(!res.ok) throw new Error('Falha ao enviar. Tente novamente.');
      toast.success('Mensagem enviada. Em breve falamos com você.');
      setFormData({ name:'', company:'', phone:'', need:'Criar um site', message:'' });
    } catch(err){ toast.error(err?.message || 'Não foi possível enviar sua mensagem agora.'); }
    finally { setIsSubmitting(false); }
  };

  return (
    <section id="contact" className="vpa-contact-section bg-white text-[#13295F] dark:bg-[#071126] dark:text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="vpa-section-index">06 / Contato</p>
            <h2 className="mt-7 max-w-[650px] text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[.9] tracking-[-.07em]">Vamos tirar sua ideia <span className="vpa-contact-outline">do papel.</span></h2>
            <p className="vpa-reading mt-8 max-w-[500px] text-[15px] leading-7 sm:text-base sm:leading-8">Conte um pouco do que sua empresa precisa. A conversa começa pelo contexto — não por um pacote pronto.</p>
            <div className="vpa-contact-direct mt-10">
              <a href="https://wa.me/5511996046338" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={16}/></a>
              <a href="mailto:vpatech.br@gmail.com">vpatech.br@gmail.com <ArrowUpRight size={16}/></a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="vpa-contact-form">
            <div className="vpa-field-grid">
              <label><span>Seu nome *</span><input name="name" required value={formData.name} onChange={update} placeholder="Como podemos te chamar?" /></label>
              <label><span>Empresa</span><input name="company" value={formData.company} onChange={update} placeholder="Nome da sua empresa" /></label>
            </div>
            <label><span>WhatsApp / telefone *</span><input name="phone" required value={formData.phone} onChange={update} placeholder="(11) 99999-9999" /></label>
            <fieldset><legend>O que você precisa?</legend><div className="vpa-need-options">{needs.map(need=><button type="button" key={need} onClick={()=>setFormData({...formData,need})} className={formData.need===need?'is-active':''}>{need}</button>)}</div></fieldset>
            <label><span>Conte um pouco sobre o projeto *</span><textarea name="message" required rows="5" value={formData.message} onChange={update} placeholder="Objetivo, momento da empresa, site atual ou qualquer contexto que ajude a começar." /></label>
            <button className="vpa-contact-submit" disabled={isSubmitting} type="submit"><span>{isSubmitting?'Enviando...':'Enviar projeto'}</span><Send size={17}/></button>
            <p className="vpa-contact-note">Sem compromisso. Usamos essas informações apenas para entender sua necessidade e responder ao contato.</p>
          </form>
        </div>
      </div>
    </section>
  );
};
