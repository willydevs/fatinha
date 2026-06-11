import { useState, useEffect, useCallback } from 'react'
import { useReveal } from '../hooks/useReveal'

import imgItaloTiago     from '../../Galeria – Fatinha Castro/italo-tiago.jpeg'
import imgStephanie      from '../../Galeria – Fatinha Castro/Stephanie-Matheus.jpeg'
import imgJuliaDelfina   from '../../Galeria – Fatinha Castro/Debutante-Julia-Delfina.jpeg'
import imgMarianaHorta   from '../../Galeria – Fatinha Castro/Debutante-Mariana-Horta.jpeg'
import imgMaluPalmeira   from '../../Galeria – Fatinha Castro/Debutante-Malu-Palmeira.jpeg'
import imgDudaMaynard    from '../../Galeria – Fatinha Castro/Debutante-Duda-Maynard.jpeg'
import imgSophiaMatheus  from '../../Galeria – Fatinha Castro/Debutante-Sophia-Matheus.jpeg'
import imgBrunaLenzi     from '../../Galeria – Fatinha Castro/Debutante-Bruna-Lenzi.jpeg'
import imgPaolaRezende   from '../../Galeria – Fatinha Castro/Debutante-Paola-Rezende.jpeg'
import imgLuanaAndre     from '../../Galeria – Fatinha Castro/Luana-e-Andre.jpeg'
import imgJaneVieira     from '../../Galeria – Fatinha Castro/Aniversariante-Jane-Vieira.jpeg'
import imgMarianaGabriel from '../../Galeria – Fatinha Castro/Mariana-e-Gabriel.jpeg'
import imgNatalia        from '../../Galeria – Fatinha Castro/Debutante-Natalia-Menezes.jpeg'
import imgMichellePedro  from '../../Galeria – Fatinha Castro/Michelle-e-Pedro-Alexandre.jpeg'
import imgYasminCaio     from '../../Galeria – Fatinha Castro/Yasmin-e-Caio.jpeg'
import imgThainaBruno    from '../../Galeria – Fatinha Castro/Thaina-e-Bruno.jpeg'
import imgIreneGabriel   from '../../Galeria – Fatinha Castro/Irene-e-Gabriel.jpeg'
import imgLeticiaJunior  from '../../Galeria – Fatinha Castro/Leticia-e-Junior.jpeg'
import imgCatarinaCarlos from '../../Galeria – Fatinha Castro/Catarina-e-Carlos.jpeg'
import imgMarcelaAndre   from '../../Galeria – Fatinha Castro/Marcela-e-Andre.jpeg'

const testimonials = [
  {
    img: imgItaloTiago,
    name: 'Italo & Tiago',
    role: 'Casamento',
    date: 'Agosto de 2022',
    quote: 'Deus coloca as pessoas certas em nossos caminhos. Tivemos a melhor assessoria durante oito meses, que sempre se preocupou com a qualidade dos serviços e transparência dos contratos. E durante a semana e dia do casamento, seu profissionalismo e dedicação são imbatíveis. Ainda não encontramos no dicionário palavra para expressar nossa eterna gratidão. @fatinhaccerimonial, agora nossa grande amiga. Te amamos. ❤️',
  },
  {
    img: imgStephanie,
    name: 'Stephanie & Matheus',
    role: 'Casamento',
    date: 'Novembro de 2022',
    quote: 'Fatinha, minha escolha mais certa, depois do noivo, é claro! Sem um pingo de dúvidas, sabíamos que tínhamos a melhor cerimonialista ao nosso lado! Detalhista, organizada, correta, caprichosa, super pontual e atenta a tudo! Combo perfeito para quem decidiu organizar um casamento em menos de 3 meses! Missão dada é missão cumprida pra Fatinha. E como tudo fluiu perfeitamente bem! Foram inúmeros os elogios que ouvimos. Nosso muito obrigado!!!',
  },
  {
    img: imgJuliaDelfina,
    name: 'Júlia Delfina',
    role: 'Debutante',
    date: 'Dezembro de 2022',
    quote: 'Tia Fatinha!!! Só tenho a te agradecer por TUDO! Por todo cuidado e paciência que teve comigo nesses 20 dias, nada disso seria possível sem você! Eu não gostava do meu aniversário, mas depois dessa festa de ontem comecei a gostar!!! Um dia mais que especial, que ficará pra sempre na minha memória e no meu coração!!! Gratidão eterna por tudo que você fez por mim. Amo você e fico muito feliz de ter a certeza que fiz a minha festa com a melhor cerimonialista do mundooo!!!! Estava TUDO perfeito, muito melhor do que eu imaginei. 💗',
  },
  {
    img: imgMarianaHorta,
    name: 'Mariana Horta',
    role: 'Debutante',
    date: 'Fevereiro de 2023',
    author: 'Mônica Horta — mãe da debutante',
    quote: 'Quero prestar nosso sincero agradecimento por todo o seu trabalho, parceria, acolhimento, carinho, atenção e profissionalismo! Fiquei encantada e parabenizo você e sua equipe pela organização da festa, com total disponibilidade e conhecimento de tudo o que se passava no evento. Mari foi todo tempo monitorada e acolhida. Nada passava despercebido. Mari está muito feliz, ainda embalada com os momentos vividos na festa. 😍🌹',
  },
  {
    img: imgMaluPalmeira,
    name: 'Malu Palmeira',
    role: 'Debutante',
    date: 'Julho de 2023',
    author: 'Alessandra Aleixo — mãe da debutante',
    quote: 'Passando para agradecer enormemente seu profissionalismo e principalmente seu carinho com que conduz seu trabalho, de forma leve, nos deixando muito tranquilos e confiantes!! Sem sua presença em todo esse processo nada teria sido tão perfeito!! Muito amor no que faz e conexão com os nossos adolescentes!! Malu estava radiante e muito feliz com tudo, e isso é o melhor para mim. Muito obrigada por tudoooo.',
  },
  {
    img: imgDudaMaynard,
    name: 'Duda Maynard',
    role: 'Debutante',
    date: 'Outubro de 2023',
    author: 'Márcia Maynard — mãe da debutante',
    quote: 'Que festa! Que entrega! Você realmente faz do nosso sonho também o seu, conduzindo com toda leveza, carinho e maestria em tudo. Todos encantados e eu, Duda e Luiz realmente nos entregamos e curtimos cada momento, com toda a certeza que nossa festa estava sendo conduzida pela melhor. Obrigada por eternizar nosso sonho da forma mais bela, organizada e leve. Todo nosso carinho 😍',
  },
  {
    img: imgSophiaMatheus,
    name: 'Sophia Matheus',
    role: 'Debutante',
    date: 'Outubro de 2023',
    quote: 'Boa tarde, tia Fatinha. O que falar desse sonho? Eu não tenho palavras para agradecer e nem descrever o que eu senti, a energia, a organização perfeita e o seu cuidado comigo e com a minha família. Que Deus te abençoe sempre e te dê muita luz, porque você é uma pessoa super especial, que realizou o meu maior sonho!! 💜',
  },
  {
    img: imgBrunaLenzi,
    name: 'Bruna Lenzi',
    role: 'Debutante',
    date: 'Dezembro de 2023',
    quote: 'Tia Fatinha, como falar de você? Um anjo na minha vida! A pessoa que mais encorajou eu e minha mãe a enfrentar esse desafio, mas sabendo que seria com você, tudo ficou mais fácil e leve! Tão bom ter dividido esse momento tão lindo com uma pessoa que já era especial na minha vida e que virou mais ainda! Você faz as pessoas realizarem seus sonhos mais especiais. Muito obrigada por cada segundo ao seu lado. Te amo como se fosse uma tia da minha família! ❤️',
  },
  {
    img: imgPaolaRezende,
    name: 'Paola Rezende',
    role: 'Debutante',
    date: 'Junho de 2024',
    quote: 'Fatinha, eu queria te agradecer de coração, não só por ontem, mas por todo o processo de planejamento da minha festa, que você tornou leve e produtivo. Cada passo que demos juntas foi construindo o que ontem se tornou um momento inesquecível. Obrigada por todo o apoio, esforço e carinho seu e da sua equipe. Foi tudo perfeito e superou as minhas expectativas. Você é maravilhosa. 🩷',
  },
  {
    img: imgLuanaAndre,
    name: 'Luana & André',
    role: 'Casamento',
    date: 'Agosto de 2025',
    author: 'André Luiz — noivo',
    quote: 'Se eu pudesse dar uma nota entre 0 e 10 para este dia, seria 14!!! Acima da média mesmo!!! Parabéns pelo seu trabalho e obrigado, você tornou o dia 23.08.2025 o dia mais feliz da minha vida. Até o momento não ouvi NINGUÉM dizer que faltou algo ou teve algo na festa, pelo contrário, recebemos feedback de que foi o melhor casamento que já estiveram. Obrigado demaisssss ❤️❤️❤️',
  },
  {
    img: imgJaneVieira,
    name: 'Jane Vieira',
    role: 'Aniversário',
    date: 'Agosto de 2025',
    quote: 'Fatinha, só tenho a agradecer todo carinho e atenção, recheados de muito profissionalismo. Você encantou não somente a mim, mas toda minha família. Gostei muito de organizar essa festa com sua presença especial. Que Deus lhe abençoe grandemente. Você já é uma profissional reconhecida, mas tenho certeza que a qualidade do seu trabalho a levará muito, muito mais além.',
  },
  {
    img: imgMarianaGabriel,
    name: 'Mariana & Gabriel',
    role: 'Casamento',
    date: 'Setembro de 2025',
    author: 'Mariana Arcieri — noiva',
    quote: 'Fatinha, não tenho palavras para agradecer por todo o suporte, dedicação e profissionalismo que você teve com a gente nesse momento tão especial das nossas vidas. Seu cuidado, paciência e atenção aos detalhes fizeram toda a diferença e trouxeram leveza a cada etapa. Sou imensamente grata por ter tido você ao meu lado. Obrigada por tornar esse sonho ainda mais especial! 🤍',
  },
  {
    img: imgNatalia,
    name: 'Natália Menezes',
    role: 'Debutante',
    date: 'Outubro de 2025',
    quote: 'Fatinha, muuuito obrigada por ajudar a tornar meu sonho em realidade!! Você é uma pessoa maravilhosa, seu trabalho é esplêndido, foi tudo incrível! O companheirismo, as reuniões, tudo, tudo, tudo... vou ficar morrendo de saudades, passou tãooo rápido!! Confio em você de olhos fechados e, mais uma vez, muuuito obrigada por tanto!! ❤️',
  },
  {
    img: imgMichellePedro,
    name: 'Michelle & Pedro Alexandre',
    role: 'Casamento',
    date: 'Outubro de 2025',
    author: 'Michelle Birtche — noiva',
    quote: 'Você que esteve conosco desde o primeiro momento. Durante mais de um ano você foi a facilitadora de tudo e sem você não seria possível organizar tudo. A forma que você gerencia, desde o app até a constante organização de fornecedores na semana do casamento. Recebi muitos elogios de familiares e amigos sobre tamanha organização, e claro, só foi possível pelo seu trabalho e da sua equipe. Muito obrigada por nos acompanhar nessa trajetória.',
  },
  {
    img: imgYasminCaio,
    name: 'Yasmin & Caio',
    role: 'Casamento',
    date: 'Fevereiro de 2026',
    quote: 'A palavra que mais recebemos de elogio foi que a festa estava impecável. Agradecemos muito a sua parceria e doação ao longo da realização desse nosso sonho, para que ele pudesse acontecer exatamente da forma que a gente sonhou. A sua ideia da grua foi fantástica, todo mundo amou. Obrigada pela sua excelência e extrema organização com tudo e todos.',
  },
  {
    img: imgThainaBruno,
    name: 'Thainá & Bruno',
    role: 'Casamento',
    date: 'Fevereiro de 2026',
    quote: 'Passando aqui para agradecer por tudo o que você fez. Pelo seu profissionalismo, dedicação e atenção a cada detalhe. Sua equipe impecável. Foi mais do que um sonho, superou todas as expectativas. Ainda estou em êxtase! Curti como nunca e não precisei me preocupar com nada. Muito obrigada por tudo!!!! 💙',
  },
  {
    img: imgIreneGabriel,
    name: 'Irene & Gabriel',
    role: 'Casamento',
    date: 'Março de 2026',
    author: 'Irene Miglio — noiva',
    quote: 'Fatinha! Eu estou em choque com seu trabalho... nunca vi nada parecido na vida. E não sou só eu que estou falando! São os convidados, minha família, o Gabs... todos! Você é impecável! Nunca vou esquecer essa dedicação e você mora na nossa memória pra sempre!',
  },
  {
    img: imgLeticiaJunior,
    name: 'Letícia & Júnior',
    role: 'Casamento',
    date: 'Março de 2026',
    quote: 'Quando Júnior me pediu em casamento, a primeira coisa que falei foi: vamos conversar com a Fatinha. Sempre via de perto toda sua dedicação, seu profissionalismo, seu cuidado nos mínimos detalhes com cada cliente. E você BRILHOU como sempre, fez do nosso sonho o seu também. Hoje eu sou uma fã e oro a Deus pela sua vida. Você é bênção na vida das pessoas. 🤍✨',
  },
  {
    img: imgCatarinaCarlos,
    name: 'Catarina & Carlos',
    role: 'Casamento',
    date: 'Abril de 2026',
    quote: 'Muito obrigada por todos os detalhes, pelo carinho, amor, atenção e cuidado comigo e com Cacazinho. Você é uma pessoa especial, que cuida com acolhimento e ama o que faz, que dá para ver nos olhos! Meu sonho foi realizado e eu vivi o dia mais incrível da minha vida. Vocês foram de extrema importância para tudo isso virar realidade. ❤️❤️❤️❤️',
  },
  {
    img: imgMarcelaAndre,
    name: 'Marcela & André',
    role: 'Casamento',
    date: 'Abril de 2026',
    quote: 'Fatinha, passando para te agradecer de coração por tudo. Foi tudo impecável, a festa foi simplesmente perfeita, e isso é reflexo direto do seu trabalho, dedicação e cuidado em cada detalhe. Fiquei muito feliz e tranquila em ter você à frente de tudo, fez toda diferença. Obrigada mesmo por tornar esse momento tão especial para nós! ❤️❤️❤️',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const headerRef = useReveal(0.15)

  const next = useCallback(() => setCurrent(c => (c + 1) % testimonials.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length), [])

  useEffect(() => {
    const id = setInterval(next, 8000)
    return () => clearInterval(id)
  }, [next])

  const t = testimonials[current]

  return (
    <section id="depoimentos" className="bg-accent py-24 lg:py-32 overflow-hidden scroll-mt-[92px]">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-14">
          <p className="section-label mb-5">Depoimentos</p>
          <h2 className="font-cormorant font-light text-[clamp(2.2rem,4.5vw,3.8rem)] text-charcoal leading-[1.15]">
            O que dizem sobre nós
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="relative">
          <div
            key={current}
            className="bg-white shadow-[0_8px_60px_rgba(0,0,0,0.07)] overflow-hidden"
            style={{ animation: 'fadeIn 0.6s ease both' }}
          >
            <div className="flex flex-col md:flex-row">

              {/* Photo */}
              <div className="w-full h-64 md:w-[260px] md:h-auto md:flex-shrink-0">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">

                {/* Stars */}
                <div className="flex gap-1.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 14 14" fill="#C9A96E">
                      <path d="M7 0L8.56 5.12L14 5.15L9.76 8.32L11.35 13.43L7 10.24L2.65 13.43L4.24 8.32L0 5.15L5.44 5.12L7 0Z"/>
                    </svg>
                  ))}
                </div>

                {/* Large quote mark */}
                <span
                  className="font-cormorant text-[5rem] leading-none text-primary/15 select-none -mt-4 mb-1 block"
                  aria-hidden="true"
                >
                  "
                </span>

                {/* Quote */}
                <p className="font-cormorant font-light text-[clamp(1.05rem,1.8vw,1.3rem)] text-charcoal leading-[1.75] italic">
                  {t.quote}
                </p>

                {/* Divider */}
                <div className="flex items-center gap-3 mt-7 mb-5">
                  <div className="w-8 h-px bg-primary/40 flex-shrink-0" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                </div>

                {/* Name / role / date / author */}
                <div>
                  <p className="font-cormorant text-[1.2rem] font-light tracking-wide text-charcoal">
                    {t.name}
                  </p>
                  <p className="font-montserrat text-[9px] tracking-[0.3em] text-primary uppercase mt-0.5">
                    {t.role} · {t.date}
                  </p>
                  {t.author && (
                    <p className="font-montserrat text-[8.5px] tracking-[0.12em] text-taupe mt-1.5">
                      {t.author}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows + dots */}
          <div className="flex justify-center items-center gap-5 mt-8">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="w-10 h-10 border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300 flex-shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M10 3L5 8L10 13" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="flex gap-2 flex-wrap justify-center max-w-[220px]">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Depoimento ${i + 1}`}
                  className={`w-[7px] h-[7px] rounded-full transition-all duration-300 ${
                    i === current ? 'bg-primary scale-125' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Próximo"
              className="w-10 h-10 border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300 flex-shrink-0"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M6 3L11 8L6 13" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
