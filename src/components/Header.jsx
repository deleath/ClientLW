export default function Header({ title = "Рецепты", ...props }) {
  return <h2 className="text-center mb-5 mt-2">{title}</h2>;
}
