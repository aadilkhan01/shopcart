// import "bootstrap/dist/css/bootstrap.css";
import './footer.css';

const Footer = () => {
  return (
    <>
      <footer class="footer">
        {/* <!-- Grid container --> */}
        <div
          class="text-center p-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2020 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">
           Amazon clone developed by Adil
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  );
};
export default Footer;
