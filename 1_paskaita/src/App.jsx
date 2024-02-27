import "./App.css";

function App() {
  return (
    <body className="background">
      <div className="mainFrame">
        <div className="header">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Maxima_logo.svg/2560px-Maxima_logo.svg.png"
              alt=""
            />
          </div>
          <div className="headerButtons">
            <span>Home</span> <span>Product</span>
            <span>Company</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="headerImage">
          <h1>Header Image</h1>
        </div>
        <div className="rowDivs">
          <div className="rowDiv">
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              ratione veniam nemo delectus vero assumenda obcaecati enim, itaque
              numquam eveniet dicta incidunt voluptas facilis, aperiam eligendi
              accusantium totam nam. Atque.
            </p>
          </div>
          <div className="rowDiv">
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              ratione veniam nemo delectus vero assumenda obcaecati enim, itaque
              numquam eveniet dicta incidunt voluptas facilis, aperiam eligendi
              accusantium totam nam. Atque.
            </p>
          </div>
          <div className="rowDiv">
            <h1>About</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              ratione veniam nemo delectus vero assumenda obcaecati enim, itaque
              numquam eveniet dicta incidunt voluptas facilis, aperiam eligendi
              accusantium totam nam. Atque.
            </p>
          </div>
        </div>
        <div className="contentDiv">
          <div className="contentLeft">
            <div>
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                ratione veniam nemo delectus vero assumenda obcaecati enim,
                itaque numquam eveniet dicta incidunt voluptas facilis, aperiam
                eligendi accusantium totam nam. Atque. itaque numquam eveniet
                dicta incidunt voluptas facilis, aperiam eligendi accusantium
                totam nam. Atque.
              </p>
            </div>
            <div>
              <h2>Sub Header</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                ratione veniam nemo delectus vero assumenda obcaecati enim,
                itaque numquam eveniet dicta incidunt voluptas facilis, aperiam
                eligendi accusantium totam nam. Atque. itaque numquam eveniet
                dicta incidunt voluptas facilis, aperiam eligendi accusantium
                totam nam. Atque. ratione veniam nemo delectus vero assumenda
                obcaecati enim, itaque numquam eveniet dicta incidunt voluptas
                facilis, aperiam itaque numquam eveniet dicta incidunt voluptas
                facilis, aperiam eligendi accusantium totam nam. Atque. itaque
                numquam eveniet
              </p>
            </div>
          </div>
          <div className="contentRight">
            <h1>Navigation</h1>
            <div className="bottomNav">
              {" "}
              <span>Home</span> <span>Product</span>
              <span>Company</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
