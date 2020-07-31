import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import { Grid } from '@material-ui/core';




const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    maxHeight: 500,
    margin: 'auto',
    boxShadow: 'none',
    borderRadius: 0,
    marginTop: '20px',
    maxWidth: '304px',
    boxShadow: 'none',
    borderRadius: '5px',
    border: '1px solid #c5c5c5',
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

export const News = React.memo(function NewsCard() {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  return (
    <Grid container>
      <Grid item xs>
      <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        classes={mediaStyles}
        image={
          'https://s0.rbk.ru/v6_top_pics/resized/1180xH/media/img/3/35/755935208667353.jpg'
        }
      />
      <CardContent className={styles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={'20 Июля, 2020'}
          heading={'Что с ресторанным бизнесом?'}
          body={
            'Рестораны не смогли покрыть убытки от карантина за счет доставки. Некоторые из них поставляли готовые блюда в сети.'
          }
        />
        <Button color={'primary'} fullWidth className={styles.cta}>
          Узнать больше <ChevronRightRounded />
        </Button>
      </CardContent>
    </Card>
      </Grid>
      <Grid item xs>
      <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        classes={mediaStyles}
        image={
          'https://s0.rbk.ru/v6_top_pics/resized/1180xH/media/img/2/26/755958578078262.jpg'
        }
      />
      <CardContent className={styles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={'March 20, 2019'}
          heading={'Робот-бариста и робот-мерчандайзер?'}
          body={
            'Пандемия коронавируса стала неожиданным, но мощным драйвером для развития ряда технологий в сфере ретейла и общественного питания'
          }
        />
        <Button color={'primary'} fullWidth className={styles.cta}>
        Узнать больше <ChevronRightRounded />
        </Button>
      </CardContent>
    </Card>
      </Grid>
      <Grid item xs>
      <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        classes={mediaStyles}
        image={
          'https://s0.rbk.ru/v6_top_pics/resized/1180xH/media/img/1/42/755928343368421.jpg'
        }
      />
      <CardContent className={styles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={'March 20, 2019'}
          heading={'Как быть успешным в сегменте «кофе с собой»'}
          body={
            'Российский рынок кофе растет бешеными темпами. За последние шесть лет рынок кофе только в сегменте HoReCa вырос в 2,5 раза.'
          }
        />
        <Button color={'primary'} fullWidth className={styles.cta}>
        Узнать больше  <ChevronRightRounded />
        </Button>
      </CardContent>
    </Card>
      </Grid>
    </Grid>

  );
});

export default News