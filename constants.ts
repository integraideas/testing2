
export const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUf0TOzNJApJawSG9S_07GV-c2M3idX1HJBQHSkSSxXwCJmIkH14u5tKqMYSj-_Miv4RJ611Ew8YhcAA-1H0t4TcGEKcp9mpRTwdV_MGyzXtljVRrQR0uGiAfZDAylwgmTxRwbEJncQOUqJUF_iHlFzQzzZiyILju3q8mAQxi64u98MeGb3QMJK4UJp5i52YdNOYi67uyCMZzAZWskcI73gyR077-Xa3M-KSe54zUIAV-OqMck9zqirxEHbmFUl-LVJb7abZiboXvs",
  fitness: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnrT4O6Gy9lcMQgmYrOLpKAv87vffEmDkRLbproMnF94kTr6fS4yMIu3FuGEX4xw7MNMgJFDPiYJVW_YGL343hnr0yq07CD-UfgNm8KRlW01Zww-KKngx4_7KErWAshYsyrZ1ZrXvA1sviaGQai37oEyV-ScBsIzEDy5HAEy5VWJ0MGdDJhAM8dbmrS8mDmnfTm6Y6-KcDFjsNDqtb1R8Edn-vb2IqEzytuJBizH1-Ve8_fNYOnRbrFv5WdKHPhe2T7WEGHmQ82rmr",
  spiritual: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ1BKFdFtQTq9IvNvvbRBzgraWE93PeDFbjZQMK-3Xyw57j8lGBmP7N4x4gVtXq9HWVmdBfNhAWTPG8Zi5KaFff4zpj1rkl5rSNoarrLQ8NYnSUKih_5I10pC3cwFE-XbG0LTxURKJ6uj491Qm8irjgJoNuZK2XgjVxUlVwXKfQ2WdTVYoPwT-eMNlVxmr3mWQxwyCTKO2qgTiHyfe47KdbCPOBPfMFwz2_3yRW7UHFNJX6hcXRLEtC8GlX-E3y-Y4wsBZ9ulH99zI",
  profile: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4ZJSVmBvDfz9-qgW3OqqHwwMF5-EYiSm-Q6ElDQys-Pwjrpwbd9iRfyDl5-lbhqA-srs-A4IeWlAVnDrfsfi72amReajhL8fuubjo16CYLtqQFj1Dsl3EETHZ5zPd8qrNs4IcDMIvaiWiMB4Ueuc86_qy2G6UGfHzX1jbcEuT3H56Z-ipJ7n8ue7xe9H7sBdCeVNboVZfuTpUUOD4Go-BxnGYaIw89ojKxid5_yTejO3jx-2t42gSTcy1iq0w9nIJkdbvM9SMfl07"
};

export const INITIAL_PATHS: any[] = [
  {
    id: '1',
    type: 'cuerpo',
    title: 'Fuerza Superior',
    duration: '45 min',
    intensity: 'Intensidad Alta',
    focus: 'Pecho y Brazos',
    imageUrl: IMAGES.fitness,
    icon: 'fitness_center'
  },
  {
    id: '2',
    type: 'espíritu',
    title: 'El Pastor (Salmo 23)',
    duration: '15 min',
    focus: 'Meditación Guiada • Gratitud',
    imageUrl: IMAGES.spiritual,
    icon: 'menu_book'
  }
];

export const INITIAL_STREAKS: any[] = [
  {
    label: 'Racha Física',
    value: '12 Días',
    icon: 'fitness_center',
    progress: 85,
    incrementToday: true
  },
  {
    label: 'Racha Espiritual',
    value: '15 Días',
    icon: 'self_improvement',
    progress: 100,
    incrementToday: true
  },
  {
    label: 'Nivel General',
    value: 'Discípulo',
    icon: 'military_tech',
    progress: 70,
    incrementToday: false,
    color: 'text-yellow-500',
    subtitle: 'Próximo nivel: Guerrero (850 XP restantes)'
  }
];
