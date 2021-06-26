export const checkBar = () => {
    const $ = document.querySelector.bind(document);
    var widthScreen = window.innerWidth
    const bar = $(".bar")
    const nav = $("nav")
    if (bar && nav) {
        if (widthScreen <= 800) {
            nav.classList.add("menu--hident")
            bar.style.display = "flex";
        } else {
            nav.classList.remove("menu--hident")
            bar.style.display = "none";
        }
    }
}
export const checkDate = (e) => {
    if (e) {
        var ngay = e.substr(8, 2)
        var thang = e.substr(5, 2)
        var nam = e.substr(0, 4)
        return "Tháng " + thang + ", " + nam;
    }
}
export const checkDateCompany = (e) => {
    if (e) {
        var ngay = e.substr(8, 2)
        var thang = e.substr(5, 2)
        var nam = e.substr(0, 4)
        return "Tháng " + thang + "/" + nam;
    }
}
export const formatDateWork = e => {
    if (e) {
        var ngay = e.substr(8, 2)
        var thang = e.substr(5, 2)
        var nam = e.substr(0, 4)
        return ngay + "/" + thang + "/" + nam;
    }
}
export const checkDateDealtime = (e) => {
    if (e) {
        const today = new Date()
        if (new Date(e) > today) {
            return "Chưa hết hạn"
        } else {
            return "Đã hết hạn"
        }
        console.log(today);
    }
}
export const checkArrayEquar = (a, b) => {
    if (a.length !== b.length) {
        return false
    } else {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false
            }
        }
        return true;
    }
}
export const checkStatus = (e) => {
    if (e) {
        let data = [];
        let a = e.rows;
        for (let i = 0; i < a.length; i++) {
            if (a[i].status === 0) {
                data.push(a[i])
            }
        }
        console.log(data);
        return data;
    }
}