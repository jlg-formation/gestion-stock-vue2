<script>
export default {
  name: "ListView",
};
</script>

<template>
  <main>
    <h1>Liste des articles</h1>
    <div class="content">
      <nav>
        <button>Rafraîchir</button>
        <router-link append to="add" class="button">Ajouter</router-link>
        <button>Supprimer</button>
      </nav>
      <div class="error"></div>
      <table>
        <thead>
          <th class="name">Nom</th>
          <th class="price">Prix</th>
          <th class="qty">Quantité</th>
        </thead>
        <tbody>
          <tr>
            <td class="name">Tournevis</td>
            <td class="price">2.99 €</td>
            <td class="qty">240</td>
          </tr>
          <tr>
            <td class="name">Pelle</td>
            <td class="price">10.00 €</td>
            <td class="qty">240</td>
          </tr>
          <tr>
            <td class="name">Marteau</td>
            <td class="price">4.50 €</td>
            <td class="qty">240</td>
          </tr>
          <tr>
            <td class="name">Ponçeuse</td>
            <td class="price">55.00 €</td>
            <td class="qty">240</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  gap: 0.5em;
}

div.error {
  height: 2em;
  display: flex;
  align-items: center;
  font-weight: bold;
}

table {
  border: 0.1em solid #aaa;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 0.3em;
  overflow: hidden;

  th,
  td {
    padding: 0.5em 1em;
  }

  thead {
    background: #aaa;
  }

  tbody {
    cursor: pointer;
    tr:nth-child(even) {
      background: #eee;
    }

    tr:hover {
      background: #ddd;
    }

    tr.selected {
      background: #ccc;
    }
  }
}
</style>
