import "./globals.css";

type PlayerPos = "top" | "left" | "right" | "bottom";

function CardBack({ className = "" }: { className?: string }) {
  return <div className={`cardBack ${className}`} aria-hidden="true" />;
}

function CardFace({
  rank,
  suit,
}: {
  rank: string;
  suit: "♦" | "♠" | "♥" | "♣";
}) {
  const isRed = suit === "♦" || suit === "♥";

  return (
    <div className="cardFace" aria-label={`Carta ${rank}${suit}`}>
      <div className={`corner ${isRed ? "red" : "black"}`}>
        <span className="rank">{rank}</span>
        <span className="suit">{suit}</span>
      </div>

      <div className={`centerSuit ${isRed ? "red" : "black"}`}>
        {suit}
      </div>

      <div className={`corner cornerBR ${isRed ? "red" : "black"}`}>
        <span className="rank">{rank}</span>
        <span className="suit">{suit}</span>
      </div>
    </div>
  );
}

function Avatar({ pos, name }: { pos: PlayerPos; name: string }) {
  return (
    <div className={`avatarWrap avatar_${pos}`}>
      <div className="avatar">
        <span className="avatarLetter">
          {name.slice(0, 1).toUpperCase()}
        </span>
      </div>
      <div className="mood">😐</div>
    </div>
  );
}

function Stack({ pos }: { pos: PlayerPos }) {
  return (
    <div className={`stack stack_${pos}`} aria-label={`Cartas do ${pos}`}>
      <CardBack className="stackCard1" />
      <CardBack className="stackCard2" />
      <CardBack className="stackCard3" />
    </div>
  );
}

export default function GamePage() {
  return (
    <main className="table">
      <section className="board">
        <div className="playTable">
          {/* Placar */}
          <section className="scoreboard" aria-label="Placar da partida">
            <div className="scoreIcon" aria-hidden="true">🃏</div>
            <div className="scoreRows">
              <div className="scoreRow">
                <span className="scoreName">nós</span>
                <div className="scoreDots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <strong className="scoreValue">0</strong>
              </div>
              <div className="scoreRow">
                <span className="scoreName">eles</span>
                <div className="scoreDots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <strong className="scoreValue">0</strong>
              </div>
            </div>
          </section>

          {/* Atalhos topo direito */}
          <aside className="quickActions" aria-label="Atalhos">
            <button type="button" className="quickActionBtn">😊</button>
            <button type="button" className="quickActionBtn">💬</button>
            <button type="button" className="quickActionBtn">☰</button>
          </aside>

          {/* Emotes */}
          <aside className="emotesPanel" aria-label="Painel de emotes">
            <div className="emotesGrid">
              <button type="button" className="emoteTile">😚</button>
              <button type="button" className="emoteTile">😋</button>
              <button type="button" className="emoteTile">😳</button>
              <button type="button" className="emoteTile">😆</button>
            </div>
            <button type="button" className="emotesToggle" aria-label="Fechar emotes">‹</button>
          </aside>

          {/* Carta no centro */}
          <div className="centerCards">
            <CardFace rank="2" suit="♦" />
          </div>

          {/* Jogadores */}
          <Avatar pos="top" name="Bot" />
          <Avatar pos="left" name="Bot" />
          <Avatar pos="right" name="Bot" />
          <Avatar pos="bottom" name="Você" />

          {/* Pilhas */}
          <Stack pos="top" />
          <Stack pos="left" />
          <Stack pos="right" />

          {/* Mão */}
          <section className="hand">
            <CardFace rank="J" suit="♦" />
            <CardFace rank="K" suit="♦" />
            <CardFace rank="4" suit="♥" />
          </section>

          {/* TRUCO */}
          <button className="trucoBtn">
            <span className="trucoHand">✋</span>
            <span className="trucoText">TRUCO</span>
          </button>

        </div>
      </section>
    </main>
  );
}
