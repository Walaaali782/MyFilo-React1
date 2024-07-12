import React, { useEffect } from 'react';

function Header() {
  useEffect(() => {
    const cont = document.querySelector(".lines-container");
    const menu = document.querySelector(".menu");
    const pointer = document.querySelector(".pointer");
    const blog = document.querySelector(".blog");
    const contact = document.querySelector(".contact");
    const blogChild = document.querySelector(".blog-child");
    const contactChild = document.querySelector(".contact-child");

    if (cont) {
      cont.addEventListener("click", () => {
        blog.classList.remove("content");
        contact.classList.remove("content");
        if (menu.style.maxHeight) {
          menu.style.maxHeight = null;
          blogChild.style.maxHeight = null;
          contactChild.style.maxHeight = null;
          pointer.style.display = "none";
          setTimeout(() => {
            pointer.classList.remove("pointer-up");
            pointer.style.display = "block";
          }, 500);
        } else {
          menu.style.maxHeight = menu.scrollHeight + "px";
          pointer.style.display = "none";
          setTimeout(() => {
            pointer.classList.toggle("pointer-up");
            pointer.style.display = "block";
          }, 500);
        }
      });
    }

    if (pointer) {
      pointer.addEventListener("click", () => {
        blog.classList.remove("content");
        contact.classList.remove("content");
        if (menu.style.maxHeight) {
          menu.style.maxHeight = null;
          blogChild.style.maxHeight = null;
          contactChild.style.maxHeight = null;
          pointer.style.display = "none";
          setTimeout(() => {
            pointer.classList.remove("pointer-up");
            pointer.style.display = "block";
          }, 500);
        } else {
          menu.style.maxHeight = menu.scrollHeight + "px";
          pointer.style.display = "none";
          setTimeout(() => {
            pointer.classList.toggle("pointer-up");
            pointer.style.display = "block";
          }, 500);
        }
      });
    }

    if (blog) {
      blog.addEventListener("click", () => {
        if (blogChild.style.maxHeight) {
          blogChild.style.maxHeight = null;
          blog.classList.add("btn-anime");
          blog.classList.remove("content");
          setTimeout(() => {
            blog.classList.remove("btn-anime");
          }, 100);
        } else {
          blogChild.style.maxHeight = blogChild.scrollHeight + "px";
          menu.style.maxHeight = menu.scrollHeight + blogChild.scrollHeight + "px";
          blog.classList.add("btn-anime");
          blog.classList.add("content");
          setTimeout(() => {
            blog.classList.remove("btn-anime");
          }, 100);
        }
      });
    }

    if (contact) {
      contact.addEventListener("click", () => {
        if (contactChild.style.maxHeight) {
          contactChild.style.maxHeight = null;
          contact.classList.add("btn-anime");
          contact.classList.remove("content");
          setTimeout(() => {
            contact.classList.remove("btn-anime");
          }, 100);
        } else {
          contactChild.style.maxHeight = contactChild.scrollHeight + "px";
          menu.style.maxHeight = menu.scrollHeight + contactChild.scrollHeight + "px";
          contact.classList.add("btn-anime");
          contact.classList.add("content");
          setTimeout(() => {
            contact.classList.remove("btn-anime");
          }, 100);
        }
      });
    }

    const colorsli = document.querySelector(".ellips .walaa .nona");

    if (colorsli) {
      colorsli.addEventListener("click", (e) => {
        if (!e.target.classList.contains("bool")) {
          e.target.classList.add("bool");
          document.documentElement.style.setProperty('--main-color','#9e9e9e');
          document.documentElement.style.setProperty('--transparent-color','white');
          document.documentElement.style.setProperty('--secound-color','#27323E');
        } else {
          e.target.classList.remove("bool");
          document.documentElement.style.setProperty('--main-color','#27323E');
          document.documentElement.style.setProperty('--secound-color','white');
          document.documentElement.style.setProperty('--transparent-color','#212529');
        }
      });
    }

    return () => {
      if (cont) {
        cont.removeEventListener("click", () => {});
      }
      if (pointer) {
        pointer.removeEventListener("click", () => {});
      }
      if (blog) {
        blog.removeEventListener("click", () => {});
      }
      if (contact) {
        contact.removeEventListener("click", () => {});
      }
      if (colorsli) {
        colorsli.removeEventListener("click", () => {});
      }
    };
  }, []);

  return (
    <>
      <header id="header">
        <div className="contain">
          <a href="#" className="logo">
            Beans 
            <span>Studios</span> 
          </a>
          <nav>
            <div className="lines-container">
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
            <ul className="menu">
              <li><a href="#" className="outer">Home</a></li>
              <li><a href="#" className="outer">About</a></li>
              <li><a href="#" className="outer">Contacts</a></li>
              <li><a href="#" className="outer blog">PHONE: </a>
                <ul className="blog-child">
                  <li><a href="#" className="inner">01210178312</a></li>
                </ul>
              </li>
              <li><a href="#" className="outer contact">Email:</a>
                <ul className="contact-child">
                  <li><a href="#" className="inner">walaaalihassan9@gmail.com</a></li>
                </ul>
              </li>
            </ul>
            <div className="pointer"></div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
