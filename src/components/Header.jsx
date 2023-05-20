const Header = (props) => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1em',
    color: '#aeadad',
    textAlign: 'center',
    marginBottom: '30px',
  };
  return <header style={headerStyle}>{props.children}</header>;
};



export default Header;