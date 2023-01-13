export default function Navbar(props) {
    const classes = "py-2 px-3 rounded-lg shadow bg-base-100 inline ml-3 font-medium bg-white text-slate-800"
    return (
        <div className="bg-base-100 pt-5 inline-grid grid-cols-3 gap-4">
            <ul className="ml-5">
                <li className={classes}><a href="/">Beranda</a></li>
                <li className={classes}><a href="/about">Tentang Kami</a></li>
                <li className={classes}><a href="/blog">Blog</a></li>
            </ul>
        </div>
    )
}