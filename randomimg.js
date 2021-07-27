function random_imglink() {
    var myimages = new Array()
    myimages[1] = "https://cdn.discordapp.com/attachments/383189881716736001/567924147296927744/tumblr_pcwv6qliHs1qioqevo2_250.gif"
    myimages[2] = "https://cdn.discordapp.com/attachments/720413522323832923/720415540967112825/87c6857b30_82302547_o2.gif"
    myimages[3] = "https://cdn.discordapp.com/attachments/720413522323832923/720415547875131432/onpu.gif"
    myimages[4] = "https://cdn.discordapp.com/attachments/383189881716736001/567924157086695425/tumblr_pcwv6qliHs1qioqevo5_250.gif"
    myimages[5] = "https://68.media.tumblr.com/ba388e85bdad16ccf3eb41d50e4fb37b/tumblr_oshi7aqEV91syeyvqo1_250.gif"
    myimages[6] = "https://66.media.tumblr.com/1e98a234a62843744d80cab8e120d90e/tumblr_ou8cuaFc4p1s1jmnvo2_250.gif"
    myimages[7] = "https://orig00.deviantart.net/fe67/f/2018/351/7/c/ezgif_4_c5764f658c66_by_coonstito-dcuossv.gif"
    myimages[8] = "https://orig00.deviantart.net/b039/f/2018/351/8/0/ezgif_4_a997171f4f7d_by_coonstito-dcuostk.gif"
    myimages[9] = "https://orig00.deviantart.net/debc/f/2018/351/3/6/ezgif_4_7470b3795075_by_coonstito-dcuosua.gif"
    myimages[10] = "https://orig00.deviantart.net/f239/f/2018/351/6/e/ezgif_4_210b027547c1_by_coonstito-dcuosuq.gif"
    myimages[11] = "https://orig00.deviantart.net/06ee/f/2018/351/6/5/ezgif_4_b9c5e38f57c3_by_coonstito-dcuosyw.gif"
    myimages[12] = "https://orig00.deviantart.net/13c4/f/2018/351/5/5/ezgif_4_123fac189948_by_coonstito-dcuosvg.gif"
    myimages[13] = "https://orig00.deviantart.net/9a32/f/2018/351/c/f/ezgif_4_78e11b9abf2e_by_coonstito-dcuosvy.gif"
    myimages[14] = "https://orig00.deviantart.net/71a6/f/2018/351/9/8/tumblr_mzjth1vpa01qjlwa8o1_250_by_coonstito-dcuosml.gif"
    myimages[15] = "https://orig00.deviantart.net/7282/f/2018/351/f/5/tumblr_m0uceyzfcg1ql711wo1_250_by_coonstito-dcuosmz.gif"
    myimages[16] = "https://orig00.deviantart.net/7b41/f/2018/351/b/a/tumblr_inline_oxu1bpinms1r8pgc6_400_by_coonstito-dcuosnc.gif"
    myimages[17] = "https://orig00.deviantart.net/92fe/f/2018/351/a/2/_b7c6d458d46c7208aa365e6c8fe1f74e_by_coonstito-dcuor1t.gif"

    var ry = Math.floor(Math.random() * myimages.length)
    if (ry == 0) ry = 1
    document.write('<img src="' + myimages[ry] + '" border="0" width="220px">')
}
random_imglink()