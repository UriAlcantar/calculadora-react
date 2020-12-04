import Link from 'next/link'


const links = [
    {url: "/", nombre:"Home"},
    {url: "calc", nombre:"Calculadora"}
]

export default()=>(
    <nav>
    <div className="nav-wrapper blue-grey darken-3">
        <a href="/" className="brand-logo">Curso de React y Next.js</a>
        <ul className="right hide-on-med-and-down">
        {
            links.map(link=> {
               return (
               <li key={link.url}>
                   <Link href={link.url}>
                       <a>{link.nombre}</a>
                    </Link>
                   </li>
               )
            })
        }
        </ul>
    </div>
    </nav>
)