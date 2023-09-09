# django-project
Herokuでdjango-projectを運用するためのリポジトリです。

ローカルリポジトリで以下を実施しgit pushが完了するとHeroku側で自動的にビルド、デプロイしてくれます。
$python manage.py collectstatic
$git add
$git commit
$git push
