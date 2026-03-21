import './FeatureCards.css';

const FeatureCards = () => {
  const cards = [
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNvZGUteG1sLWljb24gbHVjaWRlLWNvZGUteG1sIj48cGF0aCBkPSJtMTggMTYgNC00LTQtNCIvPjxwYXRoIGQ9Im02IDgtNCA0IDQgNCIvPjxwYXRoIGQ9Im0xNC41IDQtNSAxNiIvPjwvc3ZnPg==",
      title: "Learn & Grow",
      description: "Regular workshops and coding sessions to enhance your programming skills and learn new technologies."
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXVzZXJzLWljb24gbHVjaWRlLXVzZXJzIj48cGF0aCBkPSJNMTYgMjF2LTJhNCA0IDAgMCAwLTQtNEg2YTQgNCAwIDAgMC00IDR2MiIvPjxwYXRoIGQ9Ik0xNiAzLjEyOGE0IDQgMCAwIDEgMCA3Ljc0NCIvPjxwYXRoIGQ9Ik0yMiAyMXYtMmE0IDQgMCAwIDAtMy0zLjg3Ii8+PGNpcmNsZSBjeD0iOSIgY3k9IjciIHI9IjQiLz48L3N2Zz4=",
      title: "Collaborate",
      description: "Work with passionate peers on exciting projects and build lasting connections in the tech community."
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxpZ2h0YnVsYi1pY29uIGx1Y2lkZS1saWdodGJ1bGIiPjxwYXRoIGQ9Ik0xNSAxNGMuMi0xIC43LTEuNyAxLjUtMi41IDEtLjkgMS41LTIuMiAxLjUtMy41QTYgNiAwIDAgMCA2IDhjMCAxIC4yIDIuMiAxLjUgMy41LjcuNyAxLjMgMS41IDEuNSAyLjUiLz48cGF0aCBkPSJNOSAxOGg2Ii8+PHBhdGggZD0iTTEwIDIyaDQiLz48L3N2Zz4=",
      title: "Innovate",
      description: "Turn your ideas into reality through hackathons, competitions, and innovative project challenges."
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyb3BoeS1pY29uIGx1Y2lkZS10cm9waHkiPjxwYXRoIGQ9Ik0xMCAxNC42NnYxLjYyNmEyIDIgMCAwIDEtLjk3NiAxLjY5NkE1IDUgMCAwIDAgNyAyMS45NzgiLz48cGF0aCBkPSJNMTQgMTQuNjZ2MS42MjZhMiAyIDAgMCAwIC45NzYgMS42OTZBNSA1IDAgMCAxIDE3IDIxLjk3OCIvPjxwYXRoIGQ9Ik0xOCA5aDEuNWExIDEgMCAwIDAgMC01SDE4Ii8+PHBhdGggZD0iTTQgMjJoMTYiLz48cGF0aCBkPSJNNiA5YTYgNiAwIDAgMCAxMiAwVjNhMSAxIDAgMCAwLTEtMUg3YTEgMSAwIDAgMC0xIDF6Ii8+PHBhdGggZD0iTTYgOUg0LjVhMSAxIDAgMCAxIDAtNUg2Ii8+PC9zdmc+",
      title: "Compete",
      description: "Participate in coding contests, hackathons, and challenges to test your skills and win prizes."
    }
  ];

  return (
    <article>
      <div className="Mid_container">
        <section>
          <section>
            <div className="About_us_div">
              <h1>About Us</h1>
              <p>The CSE Coding Club is a vibrant community of passionate programmers, innovators, and tech enthusiasts.<br /> Our mission is to foster a collaborative environment where students can learn, create, and excel in the world of computer science and software development.</p>
            </div>
          </section>
          <section>
            <div className="Card_s d-flex flex-row justify-content-center">
              {cards.map((card, index) => (
                <div key={index} className="card_1">
                  <img src={card.icon} className="Img_s" alt={`${card.title} icon`} />
                  <h1 className="Heading_card_1">{card.title}</h1>
                  <br />
                  <p className="card_para">{card.description}</p>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </article>
  );
};

export default FeatureCards;