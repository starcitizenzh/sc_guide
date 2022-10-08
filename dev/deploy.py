import shutil
import os
print('删除docs...')
shutil.rmtree(r'../docs')
print('删除docs成功!')
print('--------------------')
print('复制docs...')
shutil.copytree(r'docs/.vuepress/dist', r'../docs')
print('复制docs完毕!')