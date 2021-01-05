let input = document.querySelector('input');
		let btn = document.querySelector('.addTask > button');

		btn.addEventListener('click', addList);
		input.addEventListener('keyup', (e)=>{
			(e.keyCode === 13 ? addList(e) : null);
		})

		function addList(e){
			let notCompleted = document.querySelector('.pending');
			let Completed = document.querySelector('.done');

			let newLi = document.createElement('li');
			let checkBtn = document.createElement('button');
			let delBtn = document.createElement('button');

			checkBtn.innerHTML = '<i class="fa fa-circle-thin"> </i>';
			delBtn.innerHTML = '<i class="fa fa-trash"></i>';


			if(input.value !==''){
				newLi.textContent = input.value;
        input.value = '';
        notCompleted.appendChild(checkBtn);
				notCompleted.appendChild(newLi);
				newLi.appendChild(delBtn);
			}

			checkBtn.addEventListener('click', function(){
				let list = this.nextElementSibling;
				list.remove();
				Completed.appendChild(list);
				checkBtn.style.display = 'none';
			});

			delBtn.addEventListener('click', function(){
				let parent = this.parentNode;
				parent.remove();
			});
		}