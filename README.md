# Dokumentacia

Tento projekt sa sklada z troch reactovskych component:

- form componenta
  Pouzili sme react hook form. Konkretne tento balicek umoznuje rychlu spravu a validaciu formularov.

  ```jsx
  const { register, handleSubmit, errors } = useForm()
  ```

  useForm je hook, ktory obsahuje metodu register(), pomocou ktorej viem definovat validaciu inputu.
  handleSubmit je metoda, ktora sa vykona po kliknuti na tlacitko vramci html tagu form. Vzdy by mala byt definovana vramci form html tagu v atribute onSubmit. Vramci handleSubmit metody definujeme vstupnu hodnotu ako funkciu, ktora ma dosah na hodnotu napisanu v inpute
  errors je premenna, ktora bude naplnena ak nie je splnena podmienka vramci register metody.

- filter componenta
  Tato komponenta ocakava dve props, a to inputRef premennu, ktora bude obsahovat referenciu na definovany element, kde je atribut ref (takto sa vytvara prepojenie napr. na event.target.value, je to rychlejsie ako event.target.value)
  Druha props je onFilterItem, je to funkcia, ktora bude vykonana vramci posluchaca onChange.

- list componenta
  Sluzi len na vykreslenie prvkov v poli.

Hlavna komponenta je Ingredients. Obsahuje vsetky tri komponenty. V tejto komponente je definovany sposob ukladania stavu dvoch vstupnych hodnot a nasledne vykreslenie celeho pola prvkov s ulozenymi stavmi. Tiez je moznost zmazat jeden ulozeny prvok alebo vsetky. Dalej je tam definovany sposob filtrovania ulozenych prvkov.

Na uchovanie stavov sme pouzili react useState hook. Na kontrolu a filtrovanie prvkov sme pouzili useEffect.
