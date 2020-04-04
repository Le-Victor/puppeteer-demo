describe('todo test', function () {
    let page;

    before (async function () {
      page = await browser.newPage();
      await page.goto('http://127.0.0.1:7001/');
    });
  
    after (async function () {
      await page.close();
    });

    it('should have correct title-1', async function() {          
        expect(await page.title()).to.eql('Koa • Todo');
    })
    it('should new todo correct', async function() {              //添加第一个任务homewrok
      await page.click('#new-todo', {delay: 500});
      await page.type('#new-todo', 'new todo item', {delay: 50});
      await page.keyboard.press("Enter");
      let todoList = await page.waitFor('#todo-list');
      const expectInputContent = await page.evaluate(todoList => todoList.lastChild.querySelector('label').textContent, todoList);
      expect(expectInputContent).to.eql('new todo item');
    }) 

    it('should have correct title', async function() {            //添加第二个任务todo list item
      expect(await page.title()).to.eql('Koa • Todo');
    })
    it('should new todo correct-2', async function() {
      await page.click('#new-todo', {delay: 500});
      await page.type('#new-todo', 'homework', {delay: 50});
      await page.keyboard.press("Enter");
      let todoList = await page.waitFor('#todo-list');
      const expectInputContent = await page.evaluate(todoList => todoList.firstChild.querySelector('label').textContent, todoList);
      expect(expectInputContent).to.eql('homework');
    }) 

    it('should get all todo', async function(){            //渲染todolist,获取所有任务，即之前添加的homework和new todo item
      let todoList1 = await page.$eval('#todo-list', el=> el.innerText);
      expect(todoList1).to.eql('homework\nnew todo item');
    })


    it('should delete correct todo', async function(){    //删除homework任务
      const element = await page.$('.view');
      const size = await element.boundingBox();
      await page.mouse.move(size.x, size.y);        //删除按钮默认隐藏，得先把鼠标放到文本框上才会显示
      await page.click('.destroy', {delay:500}); 
      await page.waitFor(500);
      let todoList2 = await page.$eval('#todo-list', el=> el.innerText);
      expect(todoList2).to.eql('new todo item');
    })

    it('should set todo checked', async function(){       //选择new todo item已完成，并在completed里面查看
      await page.click('.toggle', {delay:500});
      await page.click('.selected');
      let todoList3 = await page.$eval('#todo-list', el=> el.innerText);
      expect(todoList3).to.eql('new todo item');
    })
  });
