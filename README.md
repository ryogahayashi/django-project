# django-project
Herokuでdjango-projectを運用するためのリポジトリです。

ローカルリポジトリで以下を実施しgit pushが完了するとHeroku側で自動的にビルド、デプロイしてくれます。

###ローカルリポジトリでの開発方法
**1.各アプリのstaticをstaticfilesに集める**
```bash
$ python manage.py collectstatic
```

**2.変更を全てステージ**
```bash
$ git add -A
```

**3.ステージした変更をコミット**
```bash
$ git commit -m "<コメント>" 
```

**4.リモートリポジトリのブランチ履歴を更新**
```bash
$ git push 
```
