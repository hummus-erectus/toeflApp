function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
        <div>
            <p>&copy; Copyright {currentYear} Robert Grayson. All rights reserved.</p>
            <p>TOEFL® is a registered trademark of ETS. This product is not endorsed or approved by ETS.</p>
        </div>
    </footer>
  )
}

export default Footer