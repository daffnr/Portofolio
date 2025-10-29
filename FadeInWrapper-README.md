# FadeInWrapper - Komponen Animasi Fade-In

Komponen reusable untuk membuat animasi fade-in yang halus dan performant saat elemen muncul di viewport.

## Fitur

- ✅ **Intersection Observer** - Performa optimal tanpa polling
- ✅ **Tailwind CSS** - Animasi CSS murni, ringan dan smooth
- ✅ **TypeScript** - Type safety dan IntelliSense
- ✅ **Responsive** - Bekerja di semua device
- ✅ **Customizable** - Arah, delay, duration yang dapat disesuaikan
- ✅ **Performance Optimized** - Tidak menghambat scroll

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Konten yang akan dianimasi |
| `delay` | `number` | `0` | Delay animasi dalam ms |
| `duration` | `number` | `600` | Durasi animasi dalam ms |
| `direction` | `'up' \| 'down' \| 'left' \| 'right' \| 'fade'` | `'up'` | Arah animasi |
| `threshold` | `number` | `0.1` | Threshold intersection observer |
| `className` | `string` | `''` | CSS class tambahan |

## Contoh Penggunaan

### 1. Animasi Sederhana

```tsx
import FadeInWrapper from './components/FadeInWrapper';

<FadeInWrapper>
  <div>Konten yang akan fade-in</div>
</FadeInWrapper>
```

### 2. Animasi dengan Delay dan Direction

```tsx
<FadeInWrapper direction="left" delay={200} duration={800}>
  <div>Konten dari kiri dengan delay 200ms</div>
</FadeInWrapper>
```

### 3. Staggered Animation (Multiple Items)

```tsx
{items.map((item, index) => (
  <FadeInWrapper 
    key={index}
    direction="up" 
    delay={100 + index * 50} 
    duration={500}
  >
    <div>{item}</div>
  </FadeInWrapper>
))}
```

### 4. Penggunaan di Section

```tsx
// About.tsx
<FadeInWrapper direction="left" delay={100} duration={800}>
  <div>
    <h1>About Me</h1>
    <p>Deskripsi...</p>
  </div>
</FadeInWrapper>

<FadeInWrapper direction="right" delay={200} duration={800}>
  <div>
    <img src="profile.jpg" alt="Profile" />
  </div>
</FadeInWrapper>
```

## Arah Animasi

- **`up`** - Elemen muncul dari bawah ke atas
- **`down`** - Elemen muncul dari atas ke bawah  
- **`left`** - Elemen muncul dari kanan ke kiri
- **`right`** - Elemen muncul dari kiri ke kanan
- **`fade`** - Hanya fade in/out tanpa transform

## Tips Penggunaan

1. **Delay bertahap**: Gunakan `delay={index * 50}` untuk staggered effect
2. **Duration**: 400-800ms untuk animasi yang smooth
3. **Threshold**: 0.1 untuk trigger lebih awal, 0.5 untuk trigger lebih lambat
4. **Performance**: Komponen sudah dioptimasi dengan `hasAnimated` state

## Browser Support

- ✅ Chrome 51+
- ✅ Firefox 55+
- ✅ Safari 12.1+
- ✅ Edge 15+

## Performance

- Menggunakan Intersection Observer API
- CSS transitions untuk animasi
- Tidak ada JavaScript animation loops
- Memory efficient dengan cleanup
