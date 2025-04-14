import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome 👋</h1>
      <p className={css.text}>
        This is your personal <strong>Contact Book</strong> — a safe and organized place to keep all your important
        connections. You can add new contacts, edit existing ones, or search your contact list anytime. Use the menu
        above to go to the Contacts page, and don’t forget to log out when you're done. 😉
      </p>
      <p className={css.text}>Let’s get started — your digital phonebook is just a click away!</p>
    </div>
  );
}
