маршрут ```app.get('/')```
отвечает 'hello world!':
```typescript
app.get('/', (req, res) => { 
    res.json('Hello World!')
  });
```

маршрут ```app.use((express.static('public')))```
обрабатывает статический файл из директории public

маршрут ```app.get('/about')```
отвечает 'Это простое приложение на Express.js':
``` typescript
app.get('/about', (req, res) => {
    res.json('Это простое приложение на Express.js')
})
```

маршрут ``` app.use() ```
обрабатывает несуществующие запросы:
``` typescript
app.use((req, res) => {
    res.status(404).send( "Страница не найдена")
  })
```

маршрут ```app.listen(port)```
слушает локальный порт:
``` typescript
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
```

