$(document).ready(function () {

    const submitHandler = document.querySelector('#submitHandler')
    const output = document.querySelector('.output')
    const birthyear = document.querySelector('.birthyear_input')
    const birthmonth = document.querySelector('.birthmonth_input')

    let years = []
    let year = 1385;
    for (let i = 0; i < 80; i++) {
        years.push(year - i)
    }

    let options = ''

    setTimeout(() => {
        years.forEach(year => {
            options += `<option value="${year}">${year}</option>`
        })
        birthyear.innerHTML += options
    }, 1000)


    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    setTimeout(() => {
        let month_options = ''
        months.forEach(month => {
            month_options += `<option value="${month}">${month}</option>`
        })
        birthmonth.innerHTML += month_options
    }, 1000)

    $('.select-box').select2({
        theme: 'bootstrap-5',
        placeholder: "Please choose",
        // allowClear: true
    });

    
    
    const phwars = [
        {
            id: 1,
            name: 'ဘင်္ဂ',
            description: `ဘင်္ဂ ခွင်တွင်ဖွားမြင်ခဲ့သော ငယ်စဉ်အခါကရောဂါဝေဒနာ များလှ၍ချူချာတတ်သည်။ ပစ္စည်းဉစ္စာ ရတနာရွှေငွေ ပျက်ဖန်များတတ်သည်။ မကြာခဏ ပျောက်ဆုံးတတ်သည်။ နှလုံးသွေးအားနည်း၍ စိတ်ငယ်ကြောက်လန့်တတ်သည်။ ငါ့သဘော ငါ့လှေငါထိုး ပဲခူးရောက်ရောက် အမှုကိစ္စများကို ဇွတ်ထိုးလုပ်တတ်သည်။ အသက်ကြီးရင့်သောအခါ ဆရာအကြီးအကဲ ဖြစ်တတ်သည်။`,
        },
        {
            id: 2,
            name: 'မရဏ',
            description:`မရဏ ခွင်တွင်ဖွားမြင်ခဲ့သော ငယ်စဉ်အခါကရောဂါများတတ်သည်။ အသက်မရှည် သေကျေ ပျက်စီးတတ်သည်။ မသေကျေခဲ့သော် လူချမ်းသာ၊ရဟန်း၊မင်းပုဏ္ဏား၊မင်းစိုးရာဇာဖြစ်တတ်သည်။ (မိန်းမ) ဖြစ်လျှင် မင်းကတော်၊စိုးကတော်၊ယောဂီ၊သီလရှင် ဖြစ်တတ်သည်။ မိဘဆရာဆွေးမျိုးမိတ်သင်္ဂဟ အတွက် အကျိုးစီးပွားကိုဆောင်ရွက်ပေးတတ်သည်။ ဟိရိဩတ္တပ္ပ ရှက်ကြောက်စိတ်ရှိတတ်သည်။ ဆံပင်၊ခြေလက်အင်္ဂါ ၊ စိတ်ကောက်တတ်သည်။စကားကြွယ်ဝစွာမပြောတတ် ၊ ရိုးသားဖြောင့်မတ်သည်။ မဟုတ်မခံဝန်ခံပြောဆိုတတ်သည်။`,
        },
        {
            id: 3,
            name: 'အထွန်း',
            description: `အထွန်း ခွင်တွင်ဖွားမြင်သော ကျော်စော ထင်းရှားတတ်သည်။ စိတ်နေစိတ်ထား ဖျတ်လတ်လျင်မြန်တတ်သည်။ ရဲမာန်သတ္တိ ပညဉာဏ်နှင့် ပြည့်စုံတတ်သည်။ ထကြွလုံ့လ ဝီရိယရှိ၍ ဉာဏ်ကိုဉီဆောင်လျက် ကိုယ့်ထူကိုယ်ထ ကိုယ့်ထူးကိုယ်ချွန် ၊ ကိုယ့်အားကိုယ်ကိုး ထူထောင်ပျိုးလာရတတ်သည်။ ချမ်းသာကြွယ်ဝတတ်သည်။ မာန်မာန ရှိတတ်သည်။ ဩဇာတန်ခိုးကြီးတတ်သည်။ စာပေကျမ်းဂန် တတ်မြောက်ပြီး စကားပြောဟောကောင်းတတ်သည်။`,
        },
        {
            id: 4,
            name: 'သိုက်',
            description: `သိုက် ခွင်တွင်ဖွားမြင်ခဲ့သော် ပထမအရွယ် ၊ ဒုတိယအရွယ် ၊ တတိယအရွယ် အရွယ်သုံးပါးစလုံး ချမ်းသာကြွယ်ဝတတ်သည်။ ဘုန်းရှိသော ရဟန်း ၊ သီလရှင် ၊ ဟောဂီပုဂ္ဂိုလ်ဖြစ်တတ်သည်။ သီလသမာဓိ အကျင့်သိက္ခာ ခါးဝတ်ပုဆိုးကဲ့သို့မြဲတတ်သည်။ အရှက်အကြောက်များတတ်သည်။ ဖြူစင်သောသဒ္ဓါ တရားရှိ၍ အလှူပေးခြင်း ဝါသနာပေးတတ်သည်။ ပညာတတ် လူရည်ချွန်ဖြစ်တတ်သည်။`,
        },
        {
            id: 5,
            name: 'ရာဇာ',
            description: `ရာဇာခွင်တွင် ဖွားမြင်ခဲ့သော ပစ္စည်းဉစ္စာ ရတနာရွှေငွေပေါများ၍ ဘုရင့်စည်းစိမ်ကဲ့သို့သော ချမ်းသာခြင်းမျိုးတို့ကို ခံစားရတတ်သည်။ စက်မှု့လက်မှု့ ပညာမျိုးတို့ကို ဝါသနာပါတတ်သည်။ စက်မှု့လက်မှု့ပညာဖြင့် အသက်မွေးဝမ်းကျောင်းကိုအကျိုးပြုတတ်သည်။`,
        },
        {
            id: 6,
            name: 'ပုတိ',
            description: `ပုတိခွင်တွင်ဖွားမြင်ခဲ့သော် ကျော်စောသောဂုဏ်သတင်း မရှိကင်းတတ်သည် ။ စကားပြောတိုးတောင်း၍ ယဉ်ကျေးသိမ်မွေ့စွာမပြောဆိုတတ်။ ငယ်စဉ်အခါက ရောဂါအနာများပြားလှ၍  အမိအဖ တို့ ငြိုငြင်စွာမွေးမြူတတ်သည်။ တစ်မြေတစ်ရွာတစ်ရပ်တပါးသို့ လှည့်လည်ကာ အသက်မွေးဝမ်းကျောင်း အလုပ်ကိုလုပ်ကိုင်ရတတ်သည်။`,
        },
        {
            id: 7,
            name: 'အဓိပတိ',
            description: `အဓိပတိခွင်တွင် ဖွားမြင်ခဲ့သော် ကျော်စောဂုဏ်သတင်းရှိတတ်သည်။ နှုတ်မှု့ပညာနှင့် အသက်မွေးဝမ်းကျောင်းပြုရတတ်သည်။ ကုန်သည်ပွဲစား အရောင်းအဝယ်ပြုတတ်သည်။ စကားထည်ဝါခံ့ညား အပြောအဟောကောင်း၍ ကထိကဖြစ်တတ်သည်။`,
        }
    ]
    
    const botes = [
        {
            id: 1,
            name: 'sunday',
            sign: 'အောင်',
            number: 1
        },
        {
            id: 2,
            name: 'wednesday',
            sign: 'လံ',
            number: 4
        },
        {
            id: 3,
            name: 'saturday',
            sign: 'ထူ',
            number: 7
        },
        {
            id: 4,
            name: 'tueday',
            sign: 'စစ်',
            number: 3
        },
        {
            id: 5,
            name: 'friday',
            sign: 'သူ',
            number: 6
        },
        {
            id: 6,
            name: 'monday',
            sign: 'ကြီး',
            number: 2
        },
    
        {
            id: 7,
            name: 'thursday',
            sign: 'ပွဲ',
            number: 5
        },
    ]
    
    submitHandler.addEventListener('submit', async(e) => {
        e.preventDefault()
        const birthyear = document.querySelector('.birthyear_input')
        const birthday = document.querySelector('.birthday_input')
        const birthmonth = document.querySelector('.birthmonth_input')

        if(birthyear.value == ''  || birthday.value == ''  || birthmonth.value == '' ){
            alert('Please fill all fields!')
            return false;
        }
        const check_year = years.includes(Number(birthyear.value));
        const check_day =  ['monday', 'tueday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].includes(birthday.value);
        const check_month =  months.includes(birthmonth.value);
        
        if(!check_year || !check_month || !check_day) {
            alert('Are you kidding me!')
            return false;
        }

        const year = birthyear.value
    
        const day = birthday.value
        const ready_year = year % 7 == 0 ?  7 : year % 7;
        const user_bote = botes.find(bote => bote.number == ready_year)
        
        let result_botes = []
        
        let count = user_bote.id
        for (let i = 0; i < botes.length; i++) {
            if(count > 7) {
                count = 1 ;
            }    
            let result_bote = botes.find(bote => bote.id == count)
            result_botes.push(result_bote) 
            count += 1;   
        }
        
        let result_phwar;
        
        for (let j = 0; j < result_botes.length; j++) {
            if(result_botes[j].name == day ) {
                result_phwar = phwars[j];
            }
        }
    
        output.innerHTML = '';
        
        const natkhat = year % 3 ;
        let natkhat_output = '';

        if(natkhat === 0) {
            natkhat_output = 'ဘီလူး'
        }else if(natkhat === 1){
            natkhat_output = 'နတ်'
        }else if (natkhat === 2) {
            natkhat_output = 'လူ'
        }
    
        const result = `
            <div class="text-end mb-2">
                <span class="bg-dark badge badge-dark p-2"><i class="fa-solid fa-moon"></i> ${natkhat_output}</span>
            </div>
            <p class="mb-2 normal_font">လူကြီးမင်းသည် <span class="text-primary">${result_phwar.name}</span>ဖွားဖြစ်ပါသည်။</p>
            <p class="lh-lg normal_font">${result_phwar.description}</p>
        `
    
        output.innerHTML += result;
    })

})