import AppBar from '../AppBar/AppBar';

export default function Loyout({ children }) {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
}
