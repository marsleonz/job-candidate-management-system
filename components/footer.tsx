export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto text-24-regular  text-center py-5 px-7  text-dark-600 ">
      <small>&copy; {year}. All rights reserved.</small>
    </footer>
  );
}
