class Pokemon {
  constructor() {
    this.id = 1;
    this.name = 'gengar';
    this.habilities = [
      {
        "ability": {
          "name": "cursed-body",
          "url": "https://pokeapi.co/api/v2/ability/130/"
        },
        "is_hidden": false,
        "slot": 1
      }
    ],
      this.image = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/269b771a-4b99-4bd7-a4b6-b266d9783658/dclx8ps-4970f7ad-792f-469a-b90d-5a4aa42bb18e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI2OWI3NzFhLTRiOTktNGJkNy1hNGI2LWIyNjZkOTc4MzY1OFwvZGNseDhwcy00OTcwZjdhZC03OTJmLTQ2OWEtYjkwZC01YTRhYTQyYmIxOGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._xC-45Mq-ymh-rRglJW4iFQTgOPm5GxRKFRCpYeV1DI';
  }
}

const customPromise = new Promise((resolve, reject) => {
  resolve(new Pokemon());
});

module.exports = customPromise;