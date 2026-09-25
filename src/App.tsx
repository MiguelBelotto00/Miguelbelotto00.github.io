import { useState } from 'react'
import './App.css'
import linkedinIcon from './assets/linkedin.svg'
import githubIcon from './assets/github.svg'

type Lang = 'es' | 'en'

const copy = {
  es: {
    role: 'Developer',
    title: 'Experiencia',
    langLabel: 'EN',
    photoAlt: 'Foto de Miguel Belotto',
    aboutBefore:
      'Desarrollador, trabajando desde paraguay, me gustan los videojuegos, los libros, la cerveza artesanal y apasionado por la musica, en general mi top 5 musicas actuales serian ',
    aboutLink: 'esta lista',
    musicTitle: 'Top 5',
    jobs: [
      {
        role: 'Semi Senior Frontend Engineer',
        company: 'Cashea',
        href: 'https://www.linkedin.com/company/cashea',
        period: 'ene 2025 — actualidad',
        location: 'Miami, Florida',
        summary:
          'Desarrollador para el equipo de marketplace, donde actualmente hago un poco de codigo en la app (flutter) y también en el bff (backend con nodejs).',
      },
      {
        role: 'Digital Engineer',
        company: 'itti',
        href: 'https://www.linkedin.com/company/ittidigital',
        period: 'jun 2023 — dic 2024',
        location: 'Asunción, Paraguay',
        summary:
          'Desarrollo de aplicacion movil para el sector financiero. Diseño y desarrollo de interfaces de usuario atractivas y funcionales. Integración de API y gestión de estado en las aplicaciones utilizando las mejores prácticas de Flutter. Colaboración con diseñadores y equipos multidisciplinarios para entregar soluciones de alta calidad.',
      },
      {
        role: 'Desarrollador Flutter Jr',
        company: 'Biggie Express',
        period: 'sep 2022 — jun 2023',
        location: 'Asunción, Paraguay',
        summary:
          'Me desempeñe en varias tareas relacionadas con el desarrollo y mantenimiento de aplicaciones móviles, incluyendo:\n- Mantenimiento de una aplicación móvil de comercio electrónico: en este rol, me encargue de desarrollar nuevas funcionalidades para mejorar la experiencia de los usuarios, así como de arreglar errores existentes.\n- Mantenimiento de una aplicación móvil para conductores: en este rol, trabaje en el desarrollo de nuevas funcionalidades y en la corrección de errores, con el objetivo de brindar a los conductores una herramienta eficiente y fácil de usar para realizar entregas a domicilio.\n- Desarrollo de nuevas aplicaciones: además del mantenimiento de aplicaciones existentes, también me enfoque en el desarrollo de nuevas aplicaciones móviles. En todas estas tareas, utilice mis habilidades y experiencia en el desarrollo de aplicaciones móviles utilizando Flutter y Dart y herramientas de control de versiones como Git.',
      },
      {
        role: 'Asistente web',
        company: 'Porter S.A.',
        period: 'jun 2020 — may 2021',
        location: 'Fernando de la Mora, Paraguay',
        summary:
          'Actualización y Mantenimiento de la Página Web con Sistema CMS (OpenCart), Actualización del Sistema Open Orange (ERP y CRM), Gestión de Inventario, Contacto y Administración de Proveedores, Atención al Cliente por medio de Redes Sociales',
      },
    ],
  },
  en: {
    role: 'Developer',
    title: 'Experience',
    langLabel: 'ES',
    photoAlt: 'Photo of Miguel Belotto',
    aboutBefore:
      'Developer, working from Paraguay. I like video games, books, and craft beer, and I am passionate about music. In general, my current top 5 songs would be ',
    aboutLink: 'this list',
    musicTitle: 'Top 5',
    jobs: [
      {
        role: 'Semi Senior Frontend Engineer',
        company: 'Cashea',
        href: 'https://www.linkedin.com/company/cashea',
        period: 'Jan 2025 — present',
        location: 'Miami, Florida',
        summary:
          'Developer on the marketplace team, where I currently write some of the app code (Flutter) and also the BFF (Node.js backend).',
      },
      {
        role: 'Digital Engineer',
        company: 'itti',
        href: 'https://www.linkedin.com/company/ittidigital',
        period: 'Jun 2023 — Dec 2024',
        location: 'Asunción, Paraguay',
        summary:
          'Built a mobile app for the financial sector. Designed and developed attractive, functional user interfaces. Integrated APIs and managed app state using Flutter best practices. Collaborated with designers and cross-functional teams to deliver high-quality solutions.',
      },
      {
        role: 'Junior Flutter Developer',
        company: 'Biggie Express',
        period: 'Sep 2022 — Jun 2023',
        location: 'Asunción, Paraguay',
        summary:
          'I worked on several tasks related to developing and maintaining mobile apps, including:\n- Maintaining an e-commerce mobile app: I built new features to improve the user experience and fixed existing bugs.\n- Maintaining a driver mobile app: I built new features and fixed bugs so drivers had an efficient, easy tool for home deliveries.\n- Developing new apps: besides maintaining existing apps, I also focused on building new mobile apps. Across all of this I used Flutter and Dart, and version control with Git.',
      },
      {
        role: 'Web assistant',
        company: 'Porter S.A.',
        period: 'Jun 2020 — May 2021',
        location: 'Fernando de la Mora, Paraguay',
        summary:
          'Updated and maintained the website on a CMS (OpenCart), updated the Open Orange system (ERP and CRM), managed inventory, contacted and administered suppliers, and handled customer support through social media.',
      },
    ],
  },
} as const

const tracks = [
  { id: '74W7TUPaRUOQgIj60HAcCh', title: 'Solo' },
  { id: '1XadOBWghF0LhMuXI4GJ6M', title: 'Chico Estrella' },
  { id: '4cOTrXfESTvKe9skDhaEPt', title: 'Carnaval' },
  { id: '4woTEX1wYOTGDqNXuavlRC', title: 'Superman' },
  { id: '5vHLwhxxlGzmClMcxRRFPr', title: 'Lithium' },
]

function App() {
  const [lang, setLang] = useState<Lang>('es')
  const t = copy[lang]

  return (
    <>
      <nav className="nav">
        <button
          type="button"
          className="lang-toggle"
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
        >
          {t.langLabel}
        </button>
        <img
          className="avatar"
          src="https://avatars.githubusercontent.com/u/84353662?v=4"
          alt={t.photoAlt}
          style={{
            width: 90,
            height: 90,
            borderRadius: '50%',
          }}
        />
        <h2>Miguel Belotto</h2>
        <p>{t.role}</p>
        <ol className="nav-links">
          <li>
            <a
              href="https://www.linkedin.com/in/miguel-belotto/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/miguelbelotto00"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" className="social-icon" />
            </a>
          </li>
        </ol>
      </nav>
      <main className="main">
        <article className="card">
          <h1>{t.title}</h1>
          <p className="about">
            {t.aboutBefore}
            <a href="#top-5">{t.aboutLink}</a>.
          </p>
          <ol className="experience">
            {t.jobs.map((job) => (
              <li key={`${job.company}-${job.period}`}>
                <h2>{job.role}</h2>
                <p className="company">
                  {'href' in job && job.href ? (
                    <a href={job.href} target="_blank" rel="noreferrer">
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </p>
                <p className="meta">
                  {job.period} · {job.location}
                </p>
                <p className="summary">{job.summary}</p>
              </li>
            ))}
          </ol>
        </article>
      </main>
      <footer id="top-5" className="music">
        <h2>{t.musicTitle}</h2>
        <div className="music-embeds">
          {tracks.map((track) => (
            <iframe
              key={track.id}
              title={track.title}
              src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0`}
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          ))}
        </div>
      </footer>
    </>
  )
}

export default App
