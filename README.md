# puppeteer-test
This is the HW of the "第6课-e2e" from "敏捷Web开发"
测试的是老师提供的项目，总共有6个测试，第一个测试tittle，第2个测试添加任务“homework”，第3个测试添加任务“new todo item”。
由于原项目的问题，依次添加这两个任务后的任务位置是随机的，所以后面几个测试可能会报错，后面的测试写的断言都是根据第一个是“homework”，第二个是“new todo list”的情况。
第4个测试获取所有todo，第5个测试删除”homework“任务，第6个测试把“new todo list”设置为已完成并在completed里查看。

P.S.上传时因为puppeteer太大给删了，需在本地重新配置