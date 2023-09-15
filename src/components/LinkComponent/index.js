export default function LinkComponent({ title, goto }) {
  return (
    <li className="p-5">
      <a
        href={goto}
        className="relative group"
      >
        <span className="relative z-10 group-hover:text-black duration-1000 text-xl">{title}</span>
        <span className="absolute left-0 right-0 bottom-0 w-full h-0.5 bg-victorViolet transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 rounded-3xl"></span>
        <span className="absolute left-0 right-0 bottom-0 w-full h-0.5 bg-transparent transform scale-x-100 group-hover:bg-victorViolet group-hover:h-full transition-all duration-1000 rounded-sm group-hover:rounded-tl-md"></span>
      </a>
    </li>
  );
}
