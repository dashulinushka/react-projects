import { Layout } from 'antd';

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 60,
  paddingInline: 46,
  lineHeight: '64px',
  backgroundColor: '#001529',
};

export default function AppHeader() {
  return (
    <Layout.Header style={headerStyle}>Header</Layout.Header>
  )
}