"""
星际公民中文资讯网首页(https://github.com/starcitizenzh/starcitizenzh.github.io)，


星际公民中文指导(https://github.com/starcitizenzh/sc_guide)更新指南：
step 1: install Node.js
step 2: clone project to local and cd to dev
step 3: npm install
step 4: npm run docs:dev (review result at local)
step 5: npm run docs:build (generate html files)
step 6: run `deploy.py` (copy dist to docs)
step 7: upload to github
"""



import shutil
import os


print('删除docs...')
shutil.rmtree(r'../docs')
print('删除docs成功!')
print('--------------------')
print('复制docs...')
shutil.copytree(r'docs/.vuepress/dist', r'../docs')
print('复制docs完毕!')
