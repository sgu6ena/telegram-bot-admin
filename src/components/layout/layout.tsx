import React, {FC} from 'react';

const Layout: FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div >
      <h1>Bot Admin</h1>
      {children}
    </div>
  );
};

export default Layout;