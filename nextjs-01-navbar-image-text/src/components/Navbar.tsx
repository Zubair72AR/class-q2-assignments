import Link from "next/link";

interface Navigation {
  id: number;
  label: string;
  path: string;
}

const Navbar = () => {
  const navigation: Navigation[] = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "About", path: "/about" },
    { id: 3, label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#080808]">
      <ul className="flex justify-center items-center gap-3 text-white py-6">
        {navigation.map((nav) => (
          <li key={nav.id}>
            <Link href={nav.path}>{nav.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
