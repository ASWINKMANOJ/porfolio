import styles from "./Project.module.css";
export default function Project({
  title,
  setModal,
  index,
}: {
  title: string;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
  index: number;
}) {
  return (
    <div
      className={styles.project}
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
    >
      <h1 className="text-5xl">{title}</h1>
      <p className="text-xl font-extralight">Design and Development</p>
    </div>
  );
}
