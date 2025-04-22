import styles from "./Project.module.css";

export default function Project({
  title,
  setModal,
  index,
  link,
}: {
  title: string;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
  index: number;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.project}
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
    >
      <h1 className=" text-3xl sm:text-5xl">{title}</h1>
      <p className="text-xl sm:text-xl font-extralight">
        Design and Development
      </p>
    </a>
  );
}
