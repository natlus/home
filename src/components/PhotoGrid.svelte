<div class="photo-grid">
  <div class="cell">
    <img src="/landscape.jpg" alt="" />
  </div>
  <div class="cell">
    <img src="/fish.jpg" alt="" />
  </div>
  <div class="cell">
    <img src="/moonjelly.jpg" alt="" />
  </div>
  <div class="cell">
    <img src="/seahorse.jpg" alt="" />
  </div>
  <div class="cell">
    <img src="/mountains.jpg" alt="" />
  </div>
</div>

<style>
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(6, 1fr);
    border-radius: var(--radius);
    background-color: rgba(255, 255, 255, 0.1);
    padding: calc(var(--spacing) / 2);
    box-shadow: var(--drop-shadow);
    height: 100%;
    gap: calc(var(--spacing) / 2);
    flex: 0 1 auto;
    max-height: 600px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--radius);
  }

  .cell {
    display: flex;
    flex: 0 1 auto;
    overflow: hidden;
    max-height: 100%;
  }

  .cell:nth-child(1) {
    grid-column: 1 / 4;
    grid-row: 1 / 3;
  }

  .cell:nth-child(2) {
    grid-column: 4 / 9;
    grid-row: 1 / 3;
  }

  .cell:nth-child(3) {
    grid-column: 9 / 13;
    grid-row: 1 / 3;
  }

  .cell:nth-child(4) {
    grid-column: 1 / 5;
    grid-row: 3 / 7;
  }

  .cell:nth-child(5) {
    grid-column: 5 / 13;
    grid-row: 3 / 7;
  }

  .cell:nth-child(6) {
    grid-column: 1 / 5;
    grid-row: 5 / 7;
  }
</style>
