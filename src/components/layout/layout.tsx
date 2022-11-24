import React, {FC} from 'react';
import styles from "./styles.module.css"
const Layout: FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className={styles.layout}>
      <h1>Telegram Bot Admin</h1>
      {children}
      <div className={styles.bottom}>
        {/*<img src="img/bg.jpg" alt=""/>*/}
      </div>
    </div>
  );
};

export default Layout;