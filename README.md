# README

## 🪝Git хуки в проекте

В этом репозитории настроены git-хуки через [Husky](https://typicode.github.io/husky/get-started.html). Они автоматически запускают проверки перед коммитом:

- ✅ [Prettier](https://prettier.io/docs/) — автоформатирование
- ✅ [TypeScript](https://scriptdev.ru/) — проверка типов
- ✅ [ESLint](https://eslint.org/docs/latest/use/getting-started) — проверка качества кода JavaScript. В этом проекте используются расширенные правила от airbnb. Список можно найти в папке .eslint_rules
- ✅ [Steiger с правилами FSD](https://github.com/feature-sliced/steiger/tree/master) — проверка кода на соответствие FSD архитектуре
- ✅ [Conventional commits](https://www.conventionalcommits.org/ru/v1.0.0-beta.4/) — проверка сообщений коммитов на соответствие Conventional commits соглашению

**Что происходит при коммите**
Перед каждым коммитом автоматически запускаются команды:

```bash
npx pretty-quick --staged # не вызывает ошибок, молча форматирует код
npx tsc --noEmit --project ./tsconfig.json # может показывать ошибки
node scripts/lint-staged.cjs # может показывать ошибки
npx steiger ./src # может показывать ошибки
```

Если есть ошибки, коммит будет отклонён, и ты увидишь сообщения об ошибках в терминале или IDE.
