import glamorous from 'glamorous'

export const Container = glamorous.div({
  textAlign: 'center',
  color: '#ffffff',
  fontSize: '24px',
  lineHeight: '40px',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: '0 20px'
})

export const StyledLink = glamorous.a({
  display: 'inline-block',
  color: '#ffffff',
  textDecoration: 'underline'
})

export const Price = glamorous.div({
  fontWeight: 'bold',
  paddingTop: '20px',
  fontSize: '48px',
  lineHeight: '56px'
})