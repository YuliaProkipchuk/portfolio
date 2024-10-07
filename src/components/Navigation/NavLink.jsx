export default function NavLink({content, link}){
    return <a href={`#${link}`} target='_self'>{content}</a>
}