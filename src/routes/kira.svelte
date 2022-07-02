<script lang="ts">
  import Modal from '../components/Modal.svelte';
  import { DateTime } from 'luxon';

  // date of birth 20-05-2021
  const dob = DateTime.fromMillis(1621468801000);
  const today = DateTime.now();
  const age = today.diff(dob, ['years', 'days', 'months']).toObject() as {
    [key: string]: number;
  };

  const ageString = Object.keys(age)
    .map((key) => {
      let unit = key;
      let value = age[key];
      if (value <= 1) {
        unit = key.replace('s', '');
      }
      return `${Math.floor(value)} ${unit}`;
    })
    .map((string, index, self) => {
      let delimiter = ', ';

      if (index + 1 === self.length) {
        delimiter = ' and ';
      }

      if (index === 0) {
        delimiter = '';
      }

      return `${delimiter}${string}`;
    })
    .join('');
</script>

<Modal width="500px">
  <svelte:fragment slot="title">
    <h3>Kira 🐶</h3>
  </svelte:fragment>

  <svelte:fragment slot="body">
    <div class="content">
      <ul>
        <li>🐕 Welsh Corgi Cardigan</li>
        <li>🗓️ {ageString} old</li>
        <li>🎨 Black & white</li>
      </ul>
      <img alt="" src="/kira.png" />
    </div>
  </svelte:fragment>
</Modal>

<style>
  .content {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: var(--spacing);
  }

  ul {
    padding-inline-start: calc(var(--spacing) * 2);
  }

  li:not(:last-child) {
    margin-bottom: var(--spacing);
  }

  img {
    background: var(--bg-elevated);
    box-shadow: var(--drop-shadow);
    max-height: 128px;
    justify-self: flex-end;
    margin-right: var(--spacing);
    border-radius: var(--radius);
    border: 3px solid #fff;
    box-shadow: var(--drop-shadow);
  }
</style>
