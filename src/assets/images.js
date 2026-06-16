// ─── Brand ───────────────────────────────────────────────────────────────────
import logo from '../../imagens/logo.png'
import fatinaPhoto  from '../../imagens/Foto de fatinha.jpg'
import fatinaPhoto1 from '../../imagens/foto-fatinha1.jpeg'
import fatinaPhoto2 from '../../imagens/foto-fatinha2.jpeg'
import fatinaPhoto3 from '../../imagens/foto-fatinha3.jpeg'
import capaCasamentos   from '../../imagens/capa-casamentos.jpeg'
import capa15Anos       from '../../imagens/capa-15-anos.jpeg'
import capaCelebracoes  from '../../imagens/capa-celebracoes.jpeg'
import heroSlide1       from '../../imagens/slide1.jpeg'
import heroSlide2       from '../../imagens/slide2.jpeg'
import heroSlide3       from '../../imagens/slide3.jpeg'
import bgEventoUnico    from '../../imagens/bg-evento-unico.jpeg'

// ─── Casamentos ───────────────────────────────────────────────────────────────
import imgAlinaChico          from '../../Galeria – Fatinha Castro/Alina-e-Chico.jpg'
import imgCamilaJuan          from '../../Galeria – Fatinha Castro/Camila-e-Juan.jpg'
import imgCamilaZe            from '../../Galeria – Fatinha Castro/Camila-e-Ze.jpg'
import imgJessicaDiego        from '../../Galeria – Fatinha Castro/Jessica-e-Diego.jpg'
import imgMagnoliaGuto        from '../../Galeria – Fatinha Castro/Magnolia-e-Guto.jpg'
import imgMonaMaycon          from '../../Galeria – Fatinha Castro/Mona-e-Maycon.png'
import imgItaloTiago          from '../../Galeria – Fatinha Castro/italo-tiago.jpeg'
import imgStephanieMatheus    from '../../Galeria – Fatinha Castro/Stephanie-Matheus.jpeg'
import imgLuanaAndre          from '../../Galeria – Fatinha Castro/Luana-e-Andre.jpeg'
import imgMarianaGabriel      from '../../Galeria – Fatinha Castro/Mariana-e-Gabriel.jpeg'
import imgMichellePedro       from '../../Galeria – Fatinha Castro/Michelle-e-Pedro-Alexandre.jpeg'
import imgYasminCaio          from '../../Galeria – Fatinha Castro/Yasmin-e-Caio.jpeg'
import imgThainaBruno         from '../../Galeria – Fatinha Castro/Thaina-e-Bruno.jpeg'
import imgIreneGabriel        from '../../Galeria – Fatinha Castro/Irene-e-Gabriel.jpeg'
import imgLeticiaJunior       from '../../Galeria – Fatinha Castro/Leticia-e-Junior.jpeg'
import imgCatarinaCarlos      from '../../Galeria – Fatinha Castro/Catarina-e-Carlos.jpeg'
import imgMarcelaAndre        from '../../Galeria – Fatinha Castro/Marcela-e-Andre.jpeg'

// ─── Debutantes ───────────────────────────────────────────────────────────────
import imgBruninha            from '../../Galeria – Fatinha Castro/Bruninha-15-anos.png'
import imgGabi                from '../../Galeria – Fatinha Castro/Gabi-15-anos.jpg'
import imgLaviniaLins         from '../../Galeria – Fatinha Castro/Lavinia-Lins-15-anos.jpg'
import imgMaEdwardaXV         from '../../Galeria – Fatinha Castro/Mo-Eduarda-XV.jpg'
import imgJuliaDelfina        from '../../Galeria – Fatinha Castro/Debutante-Julia-Delfina.jpeg'
import imgMarianaHorta        from '../../Galeria – Fatinha Castro/Debutante-Mariana-Horta.jpeg'
import imgMaluPalmeira        from '../../Galeria – Fatinha Castro/Debutante-Malu-Palmeira.jpeg'
import imgDudaMaynard         from '../../Galeria – Fatinha Castro/Debutante-Duda-Maynard.jpeg'
import imgSophiaMatheus       from '../../Galeria – Fatinha Castro/Debutante-Sophia-Matheus.jpeg'
import imgBrunaLenzi          from '../../Galeria – Fatinha Castro/Debutante-Bruna-Lenzi.jpeg'
import imgPaolaRezende        from '../../Galeria – Fatinha Castro/Debutante-Paola-Rezende.jpeg'
import imgNataliaMenezes      from '../../Galeria – Fatinha Castro/Debutante-Natalia-Menezes.jpeg'

// ─── Festas & Eventos ─────────────────────────────────────────────────────────
import imgIngridResende       from '../../Galeria – Fatinha Castro/Ingrid-Resende.jpg'
import imgSandra              from '../../Galeria – Fatinha Castro/Sandra-50-anos.jpg'
import imgSane                from '../../Galeria – Fatinha Castro/Sane-20-anos.jpg'
import imgJaneVieira          from '../../Galeria – Fatinha Castro/Aniversariante-Jane-Vieira.jpeg'

export {
  logo,
  fatinaPhoto,
  fatinaPhoto1,
  fatinaPhoto2,
  fatinaPhoto3,
  capaCasamentos,
  capa15Anos,
  capaCelebracoes,
  heroSlide1,
  heroSlide2,
  heroSlide3,
  bgEventoUnico,
  // Casamentos
  imgAlinaChico, imgCamilaJuan, imgCamilaZe, imgJessicaDiego,
  imgMagnoliaGuto, imgMonaMaycon, imgItaloTiago, imgStephanieMatheus,
  imgLuanaAndre, imgMarianaGabriel, imgMichellePedro, imgYasminCaio,
  imgThainaBruno, imgIreneGabriel, imgLeticiaJunior, imgCatarinaCarlos, imgMarcelaAndre,
  // Debutantes
  imgBruninha, imgGabi, imgLaviniaLins, imgMaEdwardaXV,
  imgJuliaDelfina, imgMarianaHorta, imgMaluPalmeira, imgDudaMaynard,
  imgSophiaMatheus, imgBrunaLenzi, imgPaolaRezende, imgNataliaMenezes,
  // Eventos
  imgIngridResende, imgSandra, imgSane, imgJaneVieira,
}

// date: 'YYYY-MM' — ordenado do mais recente para o mais antigo; sem data ao final
export const galeriaItems = [
  // ── Com data (mais recente primeiro) ──
  { src: imgMarcelaAndre,     label: 'Marcela & André',            cat: 'casamento', date: '2026-04' },
  { src: imgCatarinaCarlos,   label: 'Catarina & Carlos',          cat: 'casamento', date: '2026-04' },
  { src: imgLeticiaJunior,    label: 'Letícia & Júnior',           cat: 'casamento', date: '2026-03' },
  { src: imgIreneGabriel,     label: 'Irene & Gabriel',            cat: 'casamento', date: '2026-03' },
  { src: imgThainaBruno,      label: 'Thainá & Bruno',             cat: 'casamento', date: '2026-02' },
  { src: imgYasminCaio,       label: 'Yasmin & Caio',              cat: 'casamento', date: '2026-02' },
  { src: imgNataliaMenezes,   label: 'Natália Menezes',            cat: 'debutante', date: '2025-10' },
  { src: imgMichellePedro,    label: 'Michelle & Pedro Alexandre', cat: 'casamento', date: '2025-10' },
  { src: imgMarianaGabriel,   label: 'Mariana & Gabriel',          cat: 'casamento', date: '2025-09' },
  { src: imgJaneVieira,       label: 'Jane Vieira',                cat: 'evento',    date: '2025-08' },
  { src: imgLuanaAndre,       label: 'Luana & André',              cat: 'casamento', date: '2025-08' },
  { src: imgPaolaRezende,     label: 'Paola Rezende',              cat: 'debutante', date: '2024-06' },
  { src: imgBrunaLenzi,       label: 'Bruna Lenzi',                cat: 'debutante', date: '2023-12' },
  { src: imgDudaMaynard,      label: 'Duda Maynard',               cat: 'debutante', date: '2023-10' },
  { src: imgSophiaMatheus,    label: 'Sophia Matheus',             cat: 'debutante', date: '2023-10' },
  { src: imgMaluPalmeira,     label: 'Malu Palmeira',              cat: 'debutante', date: '2023-07' },
  { src: imgMarianaHorta,     label: 'Mariana Horta',              cat: 'debutante', date: '2023-02' },
  { src: imgJuliaDelfina,     label: 'Júlia Delfina',              cat: 'debutante', date: '2022-12' },
  { src: imgStephanieMatheus, label: 'Stephanie & Matheus',        cat: 'casamento', date: '2022-11' },
  { src: imgItaloTiago,       label: 'Italo & Tiago',              cat: 'casamento', date: '2022-08' },
]
