const $video = document.querySelector('#video')
        const $play = document.querySelector('#play')
        const $pause = document.querySelector('#pause')
        const $backward = document.querySelector('#backward')
        const $forward = document.querySelector('#forward')

        $play.addEventListener('click', handlePlay)
        $pause.addEventListener('click', handlePause)
        
        function handlePlay() {
            $video.play()
            $play.hidden = true
            $pause.hidden = false
            console.log(`***** Hice click en el botón play ▶ *****`)
        }

        function handlePause() {
            $video.pause()
            $pause.hidden = true
            $play.hidden = false
            console.log(`***** Hice click en el botón pause ⏸ *****`)
        }

        $backward.addEventListener('click', handelBackward)

        function handelBackward(){
            $video.currentTime = $video.currentTime - 10
            console.log(`***** Diez segundos hacia atrás  *****`, $video.currentTime)
        }

        $forward.addEventListener('click', handleForward)


        function handleForward(){
            $video.currentTime = $video.currentTime + 10
            console.log(`***** Diez segundos hacia adelante *****`, $video.currentTime)
        }


        const $progress = document.querySelector('#progress')
        $video.addEventListener('loadedmetadata', handleLoaded)
        $video.addEventListener('timeupdate', handleTimeUpdate)

        function handleLoaded(){ 
            $progress.max = $video.duration
            console.log('El video se ha cargando', $video.duration)
        }

        function handleTimeUpdate(){
            $progress.value = $video.currentTime
        }


      
        $progress.addEventListener('input', handleInput)

        function handleInput(){
            $video.currentTime = $progress.value
            console.log($progress.value)
        }